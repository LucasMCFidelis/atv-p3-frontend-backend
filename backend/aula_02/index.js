import express, { json } from "express"
import axios from 'axios'

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = express()
server.use(json())

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get("/dog", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.json({
      message: "Foto de cachorro obtida com sucesso!",
      data: response.data,
    });
  } catch (error) {
    console.error("Erro ao acessar a API Dog CEO:", error);
    res.status(500).json({ error: "Erro ao acessar a API Dog CEO" });
  }
});

server.get("/user", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    res.json({
      message: "Usuário obtido com sucesso!",
      data: response.data,
    });
  } catch (error) {
    console.error("Erro ao acessar a API JSONPlaceholder:", error);
    res.status(500).json({ error: "Erro ao acessar a API JSONPlaceholder" });
  }
});

server.listen(PORT, HOST, () => {
    const RESET = "\x1b[0m";
    const GREEN = "\x1b[32m";
    console.log(`${GREEN}**Url Base: http://${HOST}:${PORT}${RESET}`);
});