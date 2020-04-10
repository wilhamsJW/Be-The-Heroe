import React from 'react';

//import App from './App';


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
        export default function Header(){
            return(
                <h1>Conta Giro</h1>
            )
        }
    
        








 