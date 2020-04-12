//nessa mesma pasta tem um arquivo chamado conectBack&front explicando esse código

import React, {useState} from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import {Link} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
//depois de instalar o react-icons vc pode usar vários pacotes dentro dele, o q vamos usar
//é o FI ou fithericons, olhe no site sobre fithericons, dentro das chaves eu coloco
//qual item quero usar. dentro das chaves de um ctrl espaço e vai aparecer todos q vc quer
//olhe no site pra saber o nome correto de cada e digite Fi+nomedoicon -> FilogIn

//por padrâo tem q ser exportado todo arquivo
export default function Register() {

        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [WhatsApp, setWhatsApp] = useState();
        const [cidade, setCidade] = useState();
        const [uf, setUf] = useState();


        async function handleRegister(e) {
          e.preventDefault();
        
          const data = {
            name,
            email,
            WhatsApp,
            cidade,
            uf,
          };

          try {
            const response = await api.post('ongs', data);
  
            alert(`Este é seu ID de acesso, Anote agora mesmo: ${response.data.id}`);
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

                        <input placeholder="WhatsApp"
                          value={WhatsApp}
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