import React from 'react';

import {Link} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

import {FiLogIn} from 'react-icons/fi';
//depois de instalar o react-icons vc pode usar vários pacotes dentro dele, o q vamos usar
//é o FI ou fithericons, olhe no site sobre fithericons, dentro das chaves eu coloco
//qual item quero usar. dentro das chaves de um ctrl espaço e vai aparecer todos q vc quer
//olhe no site pra saber o nome correto de cada e digite Fi+nomedoicon -> FilogIn

//LEMBRETE: PARA TER INTRAÇÃO COM O BACKEND NA PARTE DE ROTAS INSTALE NO FRONTEND
//npm install react-router-dom

import './styles.css';

import heroesImg from '../../assets/heroes.png';
// ../ siginifca voltando á pasta e denovo voltando a pasta a raiz pra assim entrar em assets 

import logoImg from '../../assets/logo.svg';


export default function Logon() {
    return(
        <div className="Logon-container">
            <section className="form">
                <img src={logoImg} alt="logo da empresa" />

            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID" />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color='E02041' />
                 Nâo tenho cadastro</Link>                 
            </form>

            </section>
        <img src={heroesImg} alt="pessoas de costas abraçadas" />
        </div>
        //para colocar um ícone de log-in instale o npm install react-icons
        
    );
}