import React from 'react';

import Header from './Header';


//Abaixo alguns ensinamentos sobre propriedades react


/*
function App() {
  return (
    
    //<Header title="Aprenda react é bom" />
    //title é uma propriedade do react, tipo uma id
    //usando props como parametro na Função Header da pasta Header
    //e colocando {props.title dentro do h1,aparecerá este título}


    //outra maneira de fazer isso de forma automática é colocando uma tag fechada Header
    //ex.: <Header> Coloque aqui dentro o que quiser e seja feliz </Header> dessa forma
    //depois vá na pasta header.js e coloque uma propriedade chamada children dentro do h1
    //ex.: <h1>{props.children}</h1>, Lembre se de colocar o parâmetro props dentro da 
    //função Header na pasta Header
    //ex. abaixo:


   
    <Header>
      Coloque aqui dentro o que quiser e seja feliz :D 
    </Header>
    

 
  );
}

export default App;

*/

/*

3° exemplo da pasta Header

      function App() {
        return(
          <Header>you can do everything</Header>
        );
      }

      export default App;

*/


/**
 * Lembre se de rodar o servidor pra ter visualização com o react no browser
 * se estiver na pasta frontend terá q fazer isso nela, pelo terminal acesse a pasta e instale
 * os pacotes dentro dela
 * rode o servirdor com npm install
 * depois: npm install --save-dev nodemon
 * depois rode os servidor com: npm start
 */


 
  //* CONCEITOS DE PROPRIEDADES REACT:
   
  // É quase a mesma coisa que atributos  do Html, ex.:
  // <h1 id="atributo"> Coloque um texto<h1/>, a id é um atributo de h1
