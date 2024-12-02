import express from "express"

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const server = express()

server.get("/hello", (req, res) => {
    return res.status(200).json({message: "Olá, seja bem vindo"})
})

server.listen(PORT, HOST, () => {
    const RESET = "\x1b[0m";
    const GREEN = "\x1b[32m";
    const YELLOW = "\x1b[33m"
    console.log(`${GREEN}**Url Base: http://${HOST}:${PORT}${RESET}`);
    console.log(`${YELLOW}**Mensagem de boas vindas : http://${HOST}:${PORT}/hello${RESET}`);
});