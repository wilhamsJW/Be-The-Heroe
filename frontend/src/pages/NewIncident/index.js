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


export default function NewIncident() {
    return(
        <div className="new-incident-container">

        <div className="content">
            <section>
                <img src={logoImg} alt="logo a empresa"></img>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o texto detalhadamente para encontrar o Herói para resolver seu caso.</p>
           
                <Link className="back-link" to="/profile" >
                  <FiArrowLeft size={16} color='E02041' />
                  Voltar para Home
                </Link> 
            </section>
                
                 <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descriçâo" />
                    <input placeholder="Valor $" />
                    
                 
                      <button className="button" type="submit" >Cadastrar</button>  
                </form>
        </div>
    </div>
    )
}