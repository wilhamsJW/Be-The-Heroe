import React from 'react';

import './global.css';

import Routes from './routes';

export default function App() {
  return(
    <Routes />
  );
}















//  ------>>> O CÓDIGO ENCONTRADO DAQUI PRA BAIXO NÃO FAZ PARTE DO PROJETO É APENAS <<<<--------





//ESTUDOS, LEMBRE SE QUE ESTE CÓDIGO ESTÁ SIMULTANEO COM A PASTA HEADER E COM O INDEX.JS 
//POIS A PASTA APP É IGUAL A DIV ROOT NO HTML, DESSA FORMA:
//ReactDOM.render(<App />, document.getElementById('root'));



//import React, { useState } from 'react';

//import Logon from './pages/Logon';
//não é necessário colocar -> /index , sempre que importamos uma pasta ele sempre procura pelo
//arquivo index

//import Header from './Header';
//importação do header caso for trabalhar com o Header


//Abaixo alguns ensinamentos sobre propriedades react
//Exemplo 01 de como usar propriedades

/*
function App() {
  return (
    
    //<Header title="Aprenda react é bom :D" />
    //title é uma propriedade do react, tipo uma id
    //usando props como parametro na Função Header da pasta Header
    //e colocando {props.title dentro do h1,aparecerá este título}


    //outra maneira de fazer isso de forma automática é colocando uma tag fechada Header
    //ex.: <Header> Coloque aqui dentro o que quiser e seja feliz </Header> dessa forma
    //depois vá na pasta header.js e coloque uma propriedade chamada children dentro do h1
    //ex.: <h1>{props.children}</h1>, Lembre se de colocar o parâmetro props dentro da 
    //função Header na pasta Header
    //ex. abaixo:

/*
   //EXEMPLO 02 DE COMO USAR PROPS DE FORMA AUTOMÁTICA, 

    <Header>
      Coloque aqui dentro o que quiser e seja feliz :D 
    </Header>
    

 
  );
}

export default App;
*/




//3° exemplo da pasta Header

    /*
      function App() {
        return(
          <Header>you can do everything :D</Header>
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





//        ESTADO    é mais   MAIS UM CONCEITO DO REACT

//DEFINIÇÃO: Uma informação que vai ser mantida pelo componente, imagine que o componete 
//precise armazenar algum tipo de informaçâo, um imput de um usuário, ou algo de uma APi externa
//e aí ele precisa lidar com essa informaçâo, add algo nela, listar itens, excluir etc
//então no react não podemos simplesmente usar variáveis convencionais, precisamos utilizar um conceito
//chamado ESTADO. Como entender esse conceito? Imagina que queremos exibir um contador que vá de
//0 á 10
//ex.:

/*
          function App() {


            let count = 0;

            function increment () {
              count ++;
              console.log(count);
            }

            return (
              <div>
                 <header>Contador: {count} </header>
                 <button onClick={increment}>Incrementar</button>
              </div>
            );
          }

       export default App;

  */

 //Explanation of the code
 
 /**
  * No react não posso colocar um elemento abaixo do outro sem ter nada em volta, por isso temos
  * uma div.
  * Quando o usuário clikar no botão tem que aumentar esse número 0,1,2,3..
  * Para fazer isso crie uma var do tipo let q pode alterar o valor  let count = 0; 
  * const tem valor fixo,
  * <header>Contador: {count} </header> sempre usar chaves qunado for usar uma váriavel no html
  * 
  * Criar outra função para que quando o usuário clikar no botão o número aumente, crie uma função
  * dentro da função existente, count++; siginifica q irá concatenar ou sempre acrescentar +1
  * ou count += 1; dá no mesmo,
  * Agora chame a função pra toda vez q o user clique no botão o número aumente, 
  * use onClick={increment}.
  * 
  * Porém se for olhar agora no broswer, apenas os números do console mudam, o número na tela
  * do meu contador não muda, aí que entra o conceito de estado do react, abaixo terá outro
  * código com um código de estado e suas explicações
  * 
  */
//                Usando o método estado

/** Agora que entra o conceito de estado, prq toda vez que ele for alterado o componente vai renderizar ou remontar
 * exibindo as novas informações, Como converter este código acima pra ter um ESTADO?
 * comece importando lá no inicio da page o -> useState -> import React, {useState} from 'react';
 * a var count em vez de ser -> let count = 0; vai ser ->  const count = useState(0);
 * Como alterar o valor desse estado? Normalmente seria com -> count ++; mas no react você não pode alterar o valor 
 * diretamente, por causa da imutabilidade, então precisamos sobrepor o valor da var do estado, como se faz isso?
 * qunado usamos o método useState ele nos retorna um array com duas posições, a primeira posição é o valor real da var
 * a segunda posição é uma função de atualização desse valor, é uma função que consegue trocar o valor da primeira posição
 * o código da array retornada é algo assim -> Array [valor, funçãoDeaAtualização], como entender isso na prática
 * Mude a var do tipo let pra uma -> const [count, setCount], então count será o valor inicial de 0 e setCount é 
 * reponsável por mudar esse valor, então toda vez q eu querer mudar o valor de count eu tenho q chamar a função setCount
 * em de count++; eu coloco setCount(count + 1); count dentro dos parenteses representa o valor interior + 1
 * setCount é reponsável por mudar o último valor de count
 *
 * 
 */

/*
 
   export default function App() {


    //let count = 0;
    const [count, setCount] = useState(0);
    //setCount é apenas um nome dado, no lugar do set poderia ser qq outro nome
    //a letra C maiuscula poderia ser minuscula
  
    function increment () {
      //count ++;
      setCount(count + 1 );
      //esse número 1 pode ser qq número, se coloca 2 ele aumenta de 2 em 2 etc
      //console.log(count); apenas pra console
    }
  
    return (
      <div>
         <header>Contador : {count} </header>
         <button onClick={increment}>INCREMENTAR</button>
         
      </div>
    );
  }
  
  
*/


  //export default App; //PODE EXPORTAR AQUI OU DIRETO NA FUNÇÃO
    