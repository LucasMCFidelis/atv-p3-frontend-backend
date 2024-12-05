from flask import Flask

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():

    return '''
        <html>
        <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #4CAF50;
            text-align: center;
            padding-top: 50px;
          }

          h1 {
            font-size: 48px;
            color: #FF5733;
          }
        </style>
        </head>
        <body>
          <h1>Olá, esta é a minha primeira API com Flask!</h1>
        </body>
        </html>
    '''

if __name__ == '__main__':
  app.run(debug=True)