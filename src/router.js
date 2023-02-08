const express = require('express');
const controllerUser = require('./controllers/userController');
const controllerPonto = require('./controllers/pontoController');

const routes = express.Router();

routes.route('/user').get(controllerUser.List).post(controllerUser.Create)
routes.route('/user/:matricula').get(controllerUser.GetOne).put(controllerUser.Update).delete(controllerUser.Delete)

//Buscando todos os pontos
routes.route('/ponto').get(controllerPonto.ListAll)

//Update Ponto, delete Ponto, Buscar 1 ponto
routes.route('/ponto/:id').put(controllerPonto.Update).delete(controllerPonto.Delete).get(controllerPonto.GetOne)

//Bucando ponto por usuario, Criando Ponto por usuario
routes.route('/ponto/:matricula').get(controllerPonto.ListForUser).post(controllerPonto.Create)

//Buscando ponto por usuarios periodo de 1 mes
routes.route('/ponto/mes/:matricula').get(controllerPonto.FindForUserAndDate).post(controllerPonto.HomologarMes)

module.exports = routes;