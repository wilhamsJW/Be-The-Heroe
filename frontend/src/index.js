import React from 'react';
//importing react
import ReactDOM from 'react-dom';
//importing DOM, é a integração do react com o DOM, o DOM é arvore de elementos do navegador

import App from './App';
//importing app, esse app é a pasta App.js


ReactDOM.render(<App />, document.getElementById('root'));

/*
render = renderizar = obter o produto final / na web = colocar em tela
ou seja ele vai colocar em tela o App (App é um componente do react, geralmente
tem letras miasculas) q lá me trás código, esse App tá sendo colocado dentro da div root
que é a div da meu index.html.

Um componente no react é uma função que me retorna html ou css

Porém quando um arquivo html está dentro de um arquivo javascript isso é chamado de JSX
Java Script Xml = JSX
*/
