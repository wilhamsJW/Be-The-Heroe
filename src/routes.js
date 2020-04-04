const express = require("express");
//exportando express

const IncidentController = require('./controllers/IncidentController');

const OngController = require('./controllers/OngController');
//exportando ongcontroller

const ProfilleController = require('./controllers/ProfilleController');



const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
 
routes.get('/profille', ProfilleController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);



routes.delete('/incidents/:id', IncidentController.delete);
//:id é routparams, para saber mais na pasta index.js tem especificações



module.exports = routes;

