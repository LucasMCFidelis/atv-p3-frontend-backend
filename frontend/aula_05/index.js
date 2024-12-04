import express from "express";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const server = express();
server.use(express.json())

const products = [
  { id: 1, name: "Notebook", price: 2500 },
  { id: 2, name: "Notebook", price: 2500 },
  { id: 3, name: "Notebook", price: 2500 },
  { id: 4, name: "Notebook", price: 2500 },
  { id: 5, name: "Notebook", price: 2500 },
];

server.get("/products", (req, res) => {
  return res.status(200).json(products);
});

server.post("/products", (req, res) => {
  const {name, price} = req.body;
  
  const newProduct = {
    id: products.length + 1,
    name,
    price
  }
  products.push(newProduct);
  return res.status(201).json(newProduct);
});

server.listen(PORT, HOST, () => {
  const RESET = "\x1b[0m";
  const GREEN = "\x1b[32m";
  console.log(`${GREEN}**Url Base: http://${HOST}:${PORT}${RESET}`);
});
