//nessa mesma pasta tem um arquivo chamado conectBack&front explicando esse código

import React, {useState} from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import {Link, useHistory} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

//useHistory serve pra fazer uma navegaçâo com uma funçâo javascript, quando nâo fica legal 
//colocar link ou botâo de redirecionamento, é meio que uma forma automática de enviar
//o usuário pra uma pagina após ter clikado um botâo de finalizar cadastro por exemplo

import {FiArrowLeft} from 'react-icons/fi';
//depois de instalar o react-icons vc pode usar vários pacotes dentro dele, o q vamos usar
//é o FI ou fithericons, olhe no site sobre fithericons, dentro das chaves eu coloco
//qual item quero usar. dentro das chaves de um ctrl espaço e vai aparecer todos q vc quer
//olhe no site pra saber o nome correto de cada um e digite Fi+nomedoicon -> FilogIn

import api from '../../services/api';




//por padrâo tem q ser exportado todo arquivo
export default function Register() {
        
        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [whatsApp, setWhatsApp] = useState();
        const [cidade, setCidade] = useState();
        const [uf, setUf] = useState();
        
        
        const hitory = useHistory();
        //useHistory serve pra fazer uma navegaçâo com uma funçâo javascript, quando nâo fica legal 
        //colocar link ou botâo de redirecionamento, é meio que uma forma automática de enviar
        //o usuário pra uma pagina após ter clikado um botâo de finalizar cadastro por exemplo
        //importe useHistory lá em cima, e coloque ele onder quer q seja usado. aqui ele está
        //após o alert

        async function handleRegister(e) {
          e.preventDefault();//evita q a página se carregue automaticamente
        
          const data = {
            name,
            email,
            whatsApp,
            cidade,
            uf,
          };

          //nome da var pode ser qq nome, até seu próprio nome
          //api.post('ongs', data) //com esse código consigo enviar os dados pra minha APi
          //api é a pasta criada com o axios dentro, axio q é responsável pelas chamadas http
          //api.post é p método utilizado para conexâo com o banco de dados, 'ongs' é a rota
          //criada no backend nas migrations como forma de armazenamento de dados, data é a
          //var q criamos acima, contendo vários dados, esta variável vai enviar ao banco de dados
          //os dados q o usuário está digitando e irá enviar
          
      try{
            const response = await api.post('ongs', data);
            //await api.post('ongs', data); este código faz minha conexâo com o banco de dados
  
           alert(`Este é seu ID de acesso, Anote agora mesmo: ${response.data.id}`);
           //explicaçôes sobre esta linha de código abaixo

           hitory.push('/');//esta barra é página inicial q ficou com essa identificaçâo
           //isso levará o usuário a outra página após finalizar o cadastro

          } catch(err) {
            alert('Erro no cadastro, tente novamente.')
            } 
        } 
          
          //dê um console.log apenas pra ve se deu tudo certo
          /*
          console.log({
            name,email,WhatsApp,cidade,uf,
           })
           */

          
        
        return (
         <div className="register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="logo a empresa"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ong</p>
               
                    <Link className="back-link" to="/" >
                      <FiArrowLeft size={16} color='E02041' />
                      Nâo tenho cadastro
                    </Link> 
                </section>
                    
                     <form onSubmit={handleRegister}>

                        <input placeholder="Nome da ONG"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />

                        <input type="email" placeholder="Email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                          />

                        <input placeholder="whatsApp"
                          value={whatsApp}
                          onChange={e => setWhatsApp(e.target.value)}
                         />
                        
                        <div className="input-group">
                            <input placeholder="Cidade"
                             value={cidade}
                             onChange={e => setCidade(e.target.value)}
                             />

                             <input placeholder="uf" style={{width: 80}}
                             value={uf}
                             onChange={e => setUf(e.target.value)}
                             />

                       
                        </div>
                          <button className="button" type="submit" >Cadastrar</button>  
                    </form>
            </div>
        </div>
        );
      } 

//        ---->>>  <input placeholder="UF" style={{width: 80}} /> <<<-----



 //a primeira chave indica q esto incuindo um um código javascript dentro do htlml 
//a segunda chave é prq estou incluindo um objeto do javascript, e aí dent
//posso declarar css, tenho todas as propriedades do css




/**
 * alert(`Este é seu ID de acesso, Anote agora mesmo: ${response.data.id}`);
 * 
 * quando colocamos $ quer dizer q estou inserindo um elemento Javascript no html
 * aqui colocamos 3 variáveis, response, data, id
 * response foi uma variável criada nessa linha de código:
 * 
 * const response = await api.post('ongs', data);
 * 
 * api.post = api vem da pasta services, api é uma variável criada pra levar o axions dentro de si, axions 
 * é o cliente http, axions é reponsável por todas as chamadas http, entâo ele tem acesso as todas as rotas
 * criadas
 * 
 * ('ongs', data) = ongs é uma rota criada, também é uma tabela criada no backend na pasta databe em um arquivo
 * migration, entâo estou tendo acesso a todos os dados da tabela ong, e a variável data foi criada nesta página 
 * pra enviar dados q do usuário ao meu banco de dados, isto foi uma conexâo com o banco de dados.
 * 
 * 
 * 
 *  Agora que entenmos estas variáveis, vamos entender esta linha de código abaixo:
 * 
 *  alert(`Este é seu ID de acesso, Anote agora mesmo: ${response.data.id}`);
 * 
 * entâo já sabemos q a variável response tem acesso ao banco de dados, sabemos que a variável
 * data está enviando códigos do usuário pra o banco de dados e a var id foi criada pra gerar
 * números aleatórios pra criaçâo de uma id, fizemos isso na pasta OngController no Backend
 * 
 * Entâo é como que eu dissese response veja todos os dados da tabela, ele viu, agora olhe
 * pra data, data tem os dados q o usuário acabou de enviar, entâo id servirá pra retornar a id
 * criada na pasta OngController no backend, isto acontecerá pq foi pedido na pasta OngController
 * pra retornar a id via json, (olhe la o código e entenda), 
 * 
 * eu só consigo retornar a id pq foi pedido pra ela retornar
 * mas pq preciso do response e do data? pq eles tem acesso ao banco de dados, o response 
 * tem acesso ao banco de dados e o data tem os ultimos dados que o usuário digitou inclusive
 * a nova id do usuário q já foi gerada, entâo se vc coloca apenas id dentro das chaves nâo dará certo
 * pq nâo terá acesso ao banco de dados pra retornar a id
 * 
 * 
 */