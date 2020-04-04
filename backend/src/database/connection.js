const knex = require('knex');
//importação do knex
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
//criação de conexão com o banco de dado usando knex e passando como paramentro o 
//configuration.development, que é a conexão de desenvolvimento, vá na pasta knexfile.js
//e veja várias conexões, tudo que está dentro da pasta knex são conexões.
//LEMBRETE: Importe o arquivo da variável connection para dentro das pastas q eu preciso
//que se comunique com o banco de dados
//exemplo dessa importação está na pasta routes, dessa forma:const connection = require("./database/connection");

module.exports = connection;
//exportando minha conexão com o banco de dados de dentro da variável acima
