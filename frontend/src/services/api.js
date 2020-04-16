import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;


//especificaçôes sobre o axios, mais dúvidas conexâo entre backend e frontend, criei um arquivo
//aqui dentro dessa pasta chamadp conectBack&Front



/*
Terceiro passo: Instale um cliente Http, um cliente http é responsável por fzer as chamadas as nossas API do backend e obter as repostas 
grande parte da comunidade usa o axios, instale: npm install axios

Quarto passo: Após intalar o axios crie uma pasta chamada services e dentro de services crie um arquivo chamado api.js, esta página irá prover conexâo com algum serviço
externo, importe o axios com: import axios from 'axios'; crie uma var do tipo const, dessa forma: 

const api = axios.create({
    baseURL: ''
}) 

passe o parâmetro baseURL:'' coloque dentro das aspas o padrâo do endereço de todas as chamadas, como nosso padrâo é http://localhost:3333 será isso colocado dentro
das aspas, agora dê um   export default api; para que outros arquivos consigam importar este arquivo

Quinto passo: Vá na página de registro e importe a api q vc exportou pois ela fará a conexâo entre backend e frontend na página
dessa forma: import api from '../../services/api'
*/
