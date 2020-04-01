//Explanatory code for a better understanding
//below clean code


//const express = require('express');
/*
Este código significa que estou importando algo pra dentro do node.js
require = exigir. 
estou exigindo ou importando todas as funcionalidades da minha ferramenta express para dentro da minha 
váriavel express. 
*/

//const app = express();
/* Var criada para criar minha aplicação onde ficará todas as rotas
*/

/**
 * Métodos Http:
 * 
 * GET: Busca/listar informações no backend
 * quando o usuário quer acessar outra página é o get q busca essas informações e executa a acão
 * 
 * POST:cria informações no backend/ se vc quer criar um novo usuário com email,senha,cpf,rg
 * se usa o post no lugar do get de acordo com o código abaixo
 * 
 * PUT: Alterar uma informção no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * TIPOS DE PARÃMETROS:
  * 
  * Query Params: Parãmetros nomeados enviados na rota após o simbolo de interrogação ->'?'servem para filtros, paginação
  * ex.: https://localhost:3333/users?name=wilhams = está listando todos os usuários com nome de diego
  * ex2.: https://localhost:3333/users?page=2&nome=wilhams&idade=25
  * & serve pra anexar ou juntar os parãmetros
  * 
  * Route Params: Parãmetros utilizados para identificar recursos
  * ele identifica um único recurso, por ex.: tenho uma lista de usuários e quero trazer apenas 1 usuário
  * app.post('/users/:id', (request, response) =>{ --> neste códigp foi acrescentado: /:id, está mandando
  * buscar algo específico, isso será representado assim: https://localhost:3333/users/1
  * isso quer dizer que estou acessando a página de usuário e trazendo o usuário com a id 1.. isto foi só um exemplo
  * 
  * Request Body: Corpo da requisição utilizado, serve para criar ou alterar recursos
  * Imagine q eu queira criar um usuário, eu preciso informar o nome do usuário, rg,email,cpf etc
  */

  //app.post('/users', (request, response) =>{

    //const params = request.query;
    //este código está acessando parãmetro através do query, ele me dará acesso ao usuário wilhams
    //request.query = siginifica requistando o parãmetro query desta requisição: 
    //http://localhost:3333/users?name=Wilhams a requisição foi name=wilhams

    //console.log(params);
    //o acesso á wilhams será mostrado no terminal do VScode

    //o nome users dentro da rota é chamado de recursos
    //no app.get('/',) aqui dentro fica todas os recursos q vou acessar do site ex.: app.get('/contato') 
    //recursos é um acesso á uma página da minha aplicação

    //REQUEST = ele guarda todos os dados que vem através da requisição, a requisição que é feita pra 
    //ter acesso ao usuário.

    //RESPONSE = é o responsável por retornar uma reposta para o usuário, qundo se diz ali: return response
    //ele está dando uma reposta a requisição feita pelo request

    //return response.send('Helo Word');//feito apenas pra helo word

    //return response.json({
     //   evento: 'semana oministack 11.0',
      //  aluno: 'Wilhams Meira' 
    //});

    //usamos send no lugar do json só pra fazer o hello word, no node ñ se usa muito formato de texto
    //trabalhamos com JSON no response, pra enviar os dados de uma empresa ou usauário, seria um objeto, 
    //é representado com chaves
//} );

//app.listen(3333);
//estou mandando a app escutar a porta 3333
//(3333) é uma rota






//clean code
//                                                   ---> Acessando parãmetro através do query




/*
const express = require('express');
const app = express();

app.post('/users', (request, response) =>{
    const params = request.query;
    console.log(params); 

    return response.json({
        evento: 'semana oministack 11.0',
        aluno: 'Wilhams Meira' 
    });
  } ); 
  app.listen(3333);
  */




//                                                             --->      Acessando Rout Params

//não é acessado por rout e sim por params

//Route Params: Parãmetros utilizados para identificar recursos
//ele identifica um único recurso, por ex.: tenho uma lista de usuários e quero trazer apenas 1 usuário  
//note que ele não é nomeado diferente do query q é nomeado, ele usa o prametro de id

/*
 const express = require('express');
 const app = express();
 
 app.post('/users/:id', (request, response) =>{
     const params = request.params;
     console.log(params); 
 
     return response.json({
         evento: 'semana oministack 11.0',
         aluno: 'Wilhams Meira' 
     });
   } ); 
   app.listen(3333);
 */

 


 //                                                            ---> Request Body


 //use o método 'post' do isominia para criação de um recurso ou um usuário conforme exemplo a seguir
 //e no body do isominia use o formato JSON, sempre vou enviar o corpo de uma requisição no formato JSON




 const express = require('express');

 const routes = require('./routes');
 // './' pra mostar q é um arquivo, se não ele vai achar q é um pacote assim como express

 const app = express();
 
 app.use(express.json());
 //essa linha é de extrema importançia, prq a requisição do body é feita via json, se eu não coloco isso
 //ele retorna undefined, prq não reconheerá o código, com json ele entende e me retornará a requisição
 app.use(routes);

app.listen(3333);
   


