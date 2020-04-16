import React, {useState, useEffect} from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';//uubbhgfhfghfs

import {FiPower, FiTrash2} from 'react-icons/fi';

import {Link} from 'react-router-dom';
//componente link usado pra criar um link. Òbvio, ele é responsável por evitar que toda a página 
//se carregue quando mudamos de rota, no html seu usa a tag <a></a>, porém com a tag a irá
//carregar a página por completo

import api from '../../services/api';



export default function Profile() {

    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    //localStorage foi criado na page logon, e guardou o nome da ong q acessa a página
    //agora estou pedindo pra q ele pegue esse item guardado em ongName e me traga pra q
    //eu posso mostra-lo como recpçâo ao usuário. a variável foi incluida no span logo abaixo
    //desse código
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        } )
    },[ongId] );



    return (
      <div className="profile-container">
          <header>
            <img src={logoImg} alt="foto logo da empresa" />
      <span>Bem Vinda, {ongName}</span>
            
            <Link className="button" to="/incidents/new">Cadastrar Novo caso</Link>
            <button type="button">
            <FiPower size={18} color="#e02041" />
            </button>
             
          </header>

          <h1>Casos Cadastrados</h1>

          <ul>
              {incidents.map(incident => (

                       <li key={incident.id}>
                       <strong>Caso:</strong>
                        <p>{incident.title}</p>
     
                       <strong>DESCRIÇÔES</strong>
                        <p>{incident.description}</p>
     
                       <strong>VALOR</strong>
                        <p>{incident.value}</p>
    
                       <button type="button">
                          <FiTrash2 size={20} color="#a8a8b3" />
                      </button>
                  </li> 
              ))}            
          </ul>
      </div>  
    );
}
