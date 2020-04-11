import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
//esta importaçâo foi instalada com: npm install react-router-dom e agora importada

//browserRouter é essecial para que a rota funcione, não vou entrar em detalhes, mas ele
//precisa estar por volta de tudo das rotas

//Switch ele controla pra que apenas uma rota seja excutada por momento, mesmo q há caminhos 
//semelhantes ele nunca irá chamar mais de uma rota

// path é apenas para acessar o caminho, vai ficar com / lá pq vai ser acessado via localhost
//entâo nâo precisa digitar o enderço

//exact   mostra examtamente o caminho q deve ser ido, é ede extrema importançia pra não ter erros

import Logon from './pages/Logon';

import Register from './pages/Register';

//as rotas sâo componentes e precisam ser exportadas
export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
        </Switch>
        </BrowserRouter>
    )
}

