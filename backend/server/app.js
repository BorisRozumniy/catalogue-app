const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const products = require('./products');
const path = require('path');
const app = express();

const mongoConnectionString =
  'mongodb+srv://Boris:n6gQrbFfICg6Mnz5@clustercatalogueapp.zqopa.mongodb.net/ClusterCatalogueApp';
// const mongoConnectionString =
//   'mongodb+srv://Boris:n6gQrbFfICg6Mnz5@clustercatalogueapp.zqopa.mongodb.net/ClusterCatalogueApp?retryWrites=true&w=majority';
const useConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(mongoConnectionString, useConfig);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

const PORT = 4000;
app.listen(PORT, err => err ? console.log(err) : console.log('Server started'));


app.get('/products', (req, res) => {
  return res.send(products)
})

/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
}) */

const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "password"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: connect -- " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: end --" + err.message);
  }
  console.log("Подключение закрыто");
});
