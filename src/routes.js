const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) =>{
    const body = request.body;
    console.log(body); 

    return response.json({
        evento: 'semana oministack 11.0',
        aluno: 'Wilhams Meira' 
    });
  } ); 

  module.exports = routes;