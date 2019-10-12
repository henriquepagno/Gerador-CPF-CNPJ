const express = require('express');

const CpfController = require('./controllers/CpfController');
const CnpjController = require('./controllers/CnpjController');

const routes = express.Router();

// Geradoras
routes.get('/cpf', CpfController.get);
routes.get('/cnpj', CnpjController.get);

//Validadoras
routes.post('/cpf', CpfController.post);
routes.post('/cnpj', CnpjController.post)

module.exports = routes;