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

const express = require("express");
const routes = express.Router();
const crypto = require("crypto");
//crypto é um pacote q vem junto com o node, nessa var eu importei ele
//com um método dele consigo gerar um texto aleatório ou uma string aleatória
//método usado -> randomBytes
//random = aleatório
//ele vai ser usado pra criar uma id pra cada ong que acessar o site
const connection = require("./database/connection");
//importação da pasta connection para comunicação com o banco de dados
//agora pode ser feito as operações com o banco de dados

routes.get("/ongs", async (request, response) => {
  const ongs = await connection("ongs").select("*");
  //connection na tabela ongs, selecione todos os registros q tem na tabela ongs
  // o asterisco quer dizer isso

  return response.json(ongs);
});

//rota criada para cadastrar as ids das ongs
//temos duas rotas iguais com métodos diferente, uma rota é get e outra é post

routes.post("/ongs", async (request, response) => {
  //const data = request.body;
  // dessa forma a variável data guarda todas as informações
  //função definida como assícrona por async

  const { name, email, whatsapp, city, uf } = request.body;
  //dessa forma eu garanto q só terão esses itens e evito q o usuário prrencha algum campo q eu não queira

  //console.log(data); //apenas pra visualizção no terminal

  const id = crypto.randomBytes(4).toString("HEX");
  //número 4 siginifica q ele vai gerar 4 numéros aleatórios para formar
  //a id de cada ong.

  await connection("ongs").insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  /**
   * Especificações sobre: await connection('ongs').insert({
   *   aqui dentro fica todas as colunas q eu quero inseri ali dentro
   * ex.: id, email, nome, whatsap, city, uf..
   *
   * });
   *
   * await = só pode ser usado se a função for assícrona(async),
   * quando o node chegar no código com o await ele irá aguardar, que é jusatamente
   * a tradução dessa palavra (await = aguardar) então ele só continuára depois q finalizar
   * o código.
   *
   * Utilizamos a var connection e passamos o parametro dela de 'ongs' q é a tabela q e
   * eu quero inserir dados, utilizamos o método insert para inserir dados ali dentro
   *
   */

  return response.json({ id });
});
//reposta ao usuário, coloque a reposta dentro do parãmetro com {}
//a reposta será uma id ao usuário, essa id servirá de cadastro para a ong se cadastrar
//como que fosse um cpf da ong

module.exports = routes;
//exportando o conteúdo de routes

/**
   * Erro ao retornar reposta ao usuário, a reposta que seria a id do cliente
   * quando a resposta não for criada mas mesmo assim paracer a inserção dos meus dados
   * no terminal e parecer um erro dizendo: no such table ongs, quer dizer q ele não a tabela ongs
   * execute as migrations novamente com:
   * 1° Delete o banco inteiro pasta: db.sqlite,
   * 2° Excute as migrations com: npx knex migrate:latest
   * 3° Excute: npm start para reinicilaizar o servidor node
   * 4º Vá no insominia e faça o teste
   * 
   * 
   * O ERRO EM QUESTÃO É ESSE:
   * NOTE Q FOI INSERIDOS OS DADOS, SÓ NÃO ACHOU A TABELA
   * (node:11720) UnhandledPromiseRejectionWarning: Error: insert into `ongs` (`city`, `email`, `id`, `name`, `uf`, 
`whatsapp`) values ('Recife', 'apada@apad.com', '5b9dc30d', 'APAD', 'PE', '8354346646') - SQLITE_ERROR: no such table: ongs
(node:11720) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with 
   */
