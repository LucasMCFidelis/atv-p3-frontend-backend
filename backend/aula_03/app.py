# Instalação das bibliotecas necessárias

# Importar bibliotecas necessárias
from fastapi import FastAPI
from pydantic import BaseModel
from threading import Thread
import requests
import time
import uvicorn

# Definindo a aplicação FastAPI
app = FastAPI()

# Classe para validação dos dados
class Numeros(BaseModel):
    numero1: float
    numero2: float

# Endpoint para multiplicar dois números
@app.post("/multiplicacao")
def multiplicar(numeros: Numeros):
    resultado = numeros.numero1 * numeros.numero2
    return {"resultado": resultado}

# Função para rodar o servidor FastAPI em segundo plano
def iniciar_servidor():
    config = uvicorn.Config(app, host="127.0.0.1", port=8000, log_level="info")
    server = uvicorn.Server(config)
    server.run()

# Iniciar o servidor FastAPI em uma thread separada
thread = Thread(target=iniciar_servidor)
thread.start()

# Aguardar um pouco para garantir que o servidor esteja rodando
time.sleep(2)

# Enviar uma requisição de teste para o endpoint '/multiplicacao'
dados = {"numero1": 4, "numero2": 3}
resposta = requests.post("http://127.0.0.1:8000/multiplicacao", json=dados)

# Exibir o resultado
if resposta.status_code == 200:
    print("Resultado da multiplicação:", resposta.json()["resultado"])
else:
    print("Erro na requisição:", resposta.status_code)
