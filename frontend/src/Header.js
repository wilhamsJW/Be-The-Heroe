import React, { useState } from 'react';
//IMPORTING  REACT


 //EXEMPLO 01 DE COMO USAR PROPRIEDADES (Propriedades é um conceito no react)
 
/*
export default function Header(props) {
    return(
      <header><h1>{props.title}</h1></header>
 
    )
}

*/

//Sempre que for injetar uma variável, função ou qq coisa q seja javascript dentro do html
//do nosso componente vamos utilizar as chaves {}, como o ex. do h1
 




//EXEMPLO 02 DE COMO USAR PROPS DE FORMA AUTOMÁTICA



/*
export default function Header(props) {
    return(
    <header><h1>{props.children}</h1></header>
    //usando a propriedade children ele irá atualizar automaticamente
    //outra maneira legal de fazer isso é passando dentro dos parâmetros a props que vc quer usar
    //coloque só o nome children na função e no h1
    //ex.:

    //Na função -> export default function Header({children}) com chaves
    //no h1 -> <h1>{children}</h1> e corre para o abraço :D
    )
}
*/

//3° exemplo


//outra maneira legal de fazer isso é passando dentro dos parâmetros a props que vc quer usar
    //coloque só o nome children na função e no h1
    //ex.:

    //Na função -> export default function Header({children}) com chaves
    //no h1 -> <h1>{children}</h1> e corre para o abraço :D
    //assim: 
/*
        export default function Header({children}){
        return (<h1>{children}</h1>)

        }
*/





// ESTADO    MAIS UM CONCEITO DO REACT

//DEFINIÇÃO: Uma informação que vai ser mantida pelo componente, imagine que o componete 
//precise armazenar algum tipo de informaçâo, um imput de um usuário, ou algo de uma APi externa
//e aí ele precisa lidar com essa informaçâo, add algo nela, listar itens, excluir et..
//então no react não podemos simplesmente usar variavei convencionais, precisamos utilizar um conceito
//chamado estado. Como entender esse conceito? Imagina que queremos exibir um contador que vá de
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
 * exibindo as novas informações, Como converter este código acima pra ter um estado?
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


 function App() {


  //let count = 0;
  const [count, setCount] = useState(0);

  function increment () {
    //count ++;
    setCount(count + 1 );
    //esse número 1 pode ser qq número, se coloca 2 ele aumenta de 2 em 2 etc
    //console.log(count); apenas pra console
  }

  return (
    <div>
       <header>Contador: {count} </header>
       <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;

 