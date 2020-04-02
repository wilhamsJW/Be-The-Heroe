const express = require("express");
//exportando express

const OngController = require('./controllers/OngController');
//exportando ongcontroller

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;
