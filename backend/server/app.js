const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const products = require('./products');
const path = require('path');
const app = express();


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const PORT = 4000;
app.listen(PORT, err => err ? console.log(err) : console.log('Server started'));


app.get('/products', (req, res) => {
  return res.send(products)
})

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
}) */

/* const mysql = require("mysql2");
  
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
}); */