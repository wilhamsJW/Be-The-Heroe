
//código criado para visualização com o isominia para visulização e gerenciamento de 
//código e autenticação. No exemplo abaixo o insomina retorna dados do cliente
//criação de uma rota users

/*
const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) =>{
    const body = request.body;
    console.log(body); 

    return response.json({
        evento: 'semana oministack 11.0',
        aluno: 'Wilhams Meira' ,
        
        
    });
  } ); 

  module.exports = routes;

 */


const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
//crypto é um pacote q vem junto com o node, nessa var eu importei ele
//com um método dele consigo gerar um texto aleatório ou uma string aleatória
//método usado -> randomBytes
//random = aleatório
//ele vai ser usado pra criar uma id pra cada ong que acessar o site

routes.post('/ongs', (request, response) =>{
    //const data = request.body;
    // dessa forma a variável data guarda todas as informações

  const { name, email, whatsapp, city, uf} = request.body; 
  //dessa forma eu garanto q só terão esses itens e evito q o usuário prrencha algum campo q eu não queira

    //console.log(data); //apenas pra visualizção no terminal
     
    const id = crypto.randomBytes(4).toString('HEX');
    //número 4 siginifica q ele vai gerar 4 numéros aleatórios para formar
    //a id de cada ong.

    return response.json();
  } ); 

  module.exports = routes;