const express = require('express');

const CpfController = require('./controllers/CpfController');
const CnpjController = require('./controllers/CnpjController');

const routes = express.Router();

routes.get('/cpf', CpfController.get);
routes.get('/cnpj', CnpjController.get);

module.exports = routes;