import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import {FiPower, FiTrash2} from 'react-icons/fi';

import {Link} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

export default function Profile() {
    return (
      <div className="profile-container">
          <header>
            <img src={logoImg} alt="foto logo da empresa" />
            <span>Bem Vinda, Nome da ong</span>
            
            <Link className="button" to="/incidents/new">Cadastrar Novo caso</Link>
            <button type="button">
            <FiPower size={18} color="#e02041" />
            </button>
             
          </header>
          <h1>Casos Cadastrados</h1>
          <ul>
              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>DESCRIÇÔES</strong>
                  <p>Descriçôes teste</p>

                  <strong>VALOR</strong>
                  <p>Valor: $254,23</p>
                  <button type="button">
                      <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
              </li>


              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>DESCRIÇÔES</strong>
                  <p>Descriçôes teste</p>

                  <strong>VALOR</strong>
                  <p>Valor: $254,23</p>
                  <button type="button">
                      <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
              </li>


              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>DESCRIÇÔES</strong>
                  <p>Descriçôes teste</p>

                  <strong>VALOR</strong>
                  <p>Valor: $254,23</p>
                  <button type="button">
                      <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
              </li>


              <li>
                  <strong>Caso:</strong>
                  <p>Caso Teste</p>

                  <strong>DESCRIÇÔES</strong>
                  <p>Descriçôes teste</p>

                  <strong>VALOR</strong>
                  <p>Valor: $254,23</p>
                  <button type="button">
                      <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
              </li>
          </ul>
      </div>  
    )
}