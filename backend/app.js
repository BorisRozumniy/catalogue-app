const express = require('express')
const path = require('path')
const app = express()

const products = [
  {
    img: "img path",
    title: "product 1",
    description: "description of product 1",
    price: 446,
    numberDaysUntilEndDiscount: 15,
    id: "3kdfs8ffdsf",
  },
  {
    img: "img path",
    title: "product 2",
    description: "description of product 2",
    price: 346,
    numberDaysUntilEndDiscount: 65,
    id: "3kdfs8fddsq",
  },
  {
    img: "img path",
    title: "product 3",
    description: "description of product 3. Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text",
    price: 134,
    numberDaysUntilEndDiscount: 165,
    id: "3k5fs8fddsf",
  },
  {
    img: "img path",
    title: "product 4",
    description: "description of product 4",
    price: 674,
    numberDaysUntilEndDiscount: 5,
    id: "3kdfs8fd5sf",
  },
  {
    img: "img",
    title: "product 5",
    price: 99999999.99,
    numberDaysUntilEndDiscount: 0,
    description: "description",
    id: "3kdfs8fddsf",
  },
  {
    img: "img",
    title: "product 6",
    price: 42.7,
    numberDaysUntilEndDiscount: 2,
    description: "",
    id: "3kdos8f3dsf",
  },
  {
    img: "img",
    title: "product 7",
    price: 57,
    numberDaysUntilEndDiscount: 6,
    description: "",
    id: "3kdos8addsf",
  },
  {
    img: "img",
    title: "product 8",
    price: 1,
    numberDaysUntilEndDiscount: 1,
    description: "",
    id: "3k6os8fddsf",
  },
  {
    img: "img",
    title: "product 9",
    price: 55.7,
    numberDaysUntilEndDiscount: 16,
    description: "description",
    id: "3kdos8fgdsf",
  },
  {
    img: "img",
    title: "product 10",
    price: 557,
    numberDaysUntilEndDiscount: 123,
    description: "description description description description description description description description description description description description description description description",
    id: "3kdos8fdesf",
  },
  {
    img: "img",
    title: "product 11",
    price: 17,
    numberDaysUntilEndDiscount: 70,
    description: "",
    id: "1kdos8fddsf",
  },
  {
    img: "img",
    title: "product 12",
    price: 55897,
    numberDaysUntilEndDiscount: 6,
    description: "description",
    id: "3kdos8fddss",
  },
];

app.use(express.static(path.join(__dirname, 'build')))

app.get('/products', (req, res) => {
  return res.send(products)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(4000)

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "пароль_от_сервера"
});
connection.connect(function(err){
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else{
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});