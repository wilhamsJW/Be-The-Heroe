import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import {Link} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

import {FiArrowLeft} from 'react-icons/fi';
//depois de instalar o react-icons vc pode usar vários pacotes dentro dele, o q vamos usar
//é o FI ou fithericons, olhe no site sobre fithericons, dentro das chaves eu coloco
//qual item quero usar. dentro das chaves de um ctrl espaço e vai aparecer todos q vc quer
//olhe no site pra saber o nome correto de cada e digite Fi+nomedoicon -> FilogIn

//por padrâo tem q ser exportado todo arquivo
export default function Register() {
        return (
            <div className="Register-container">

            <div className="content">
                <section>
                    <img src={logoImg} alt="logo a empresa"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ong</p>

                    <Link className="back-link" to="/register">
                    <FiArrowLeft size={16} color='E02041' />
                     Nâo tenho cadastro</Link>  
                    <form>
                        <input placeholder="Nome da ONG" />
                        <input type="email" placeholder="Email" />
                        <input placeholder="Whatsaap" />
                        
                        <div className="input-group">
                            <input placeholder="Cidade" />
                            <input placeholder="UF" style={{width: 80}} />  
                        
            
                         <button className="button" type="submit" >Cadastrar</button> 
                            
                        </div>
                    </form>
                </section>
            </div>

            </div>

            
        );
        
}


//        ---->>>  <input placeholder="UF" style={{width: 80}} /> <<<-----

 //a primeira chave inidca q esto incuindo um um código javascript dentro do htlml 
//a segunda chave é prq estou incluindo um objeto do javascript, e aí dent
//posso declarar css, tenho todas as propriedades do css