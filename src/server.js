const express = require('express');
const database = require('./db')

const api = express();

database.sync().then(() => console.log("database connected"))

const routes = require('./router')

api.use(express.json());
api.use(routes);

api.listen(4200, () => {
  console.log("Rodando na porta 4200");
})