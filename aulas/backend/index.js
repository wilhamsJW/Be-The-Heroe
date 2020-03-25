const express = require('express');
/*
Este código significa que estou importando algo pra dentro do node.js
require = exigir. 
estou exigindo ou importando todas as funcionalidades da minha ferramenta express para dentro da minha 
váriavel express. 
*/

const app = express();
/* Var criada para criar minha aplicação onde ficará todas as rotas
*/

app.get('/', (request, response) =>{
    //return response.send('Helo Word');//feito apenas pra helo word
    return response.json({
        evento: 'semana oministack 11.0',
        aluno: 'Wilhams Meira'
    });

    //usamos send só pra fazer o hello word, no node ñ se usa muito formato de texto
    //trabalhamos com JSON no response, pra enviar os dados de uma empresa ou usauário, seria um objeto, 
    //é representado com chaves
} );

app.listen(3333);
//estou mandando a app escutar a porta 3333