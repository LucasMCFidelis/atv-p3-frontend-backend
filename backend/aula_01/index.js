import express, { json } from "express";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const server = express();
server.use(json());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/usuario/10", (req, res) => {
  let email = "lucas@example.com";
  res.send(email);
});

server.put("/usuario/10", (req, res) => {
  email = req.body.email;
  res.json({
    message: `Email do usuário de id 10 foi atualizado para ${email}`,
  });
});

server.listen(PORT, HOST, () => {
  const RESET = "\x1b[0m";
  const GREEN = "\x1b[32m";
  console.log(`${GREEN}**Url Base: http://${HOST}:${PORT}${RESET}`);
});
