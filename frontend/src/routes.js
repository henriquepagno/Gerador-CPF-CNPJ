import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cpf from './pages/Cpf';
import Cnpj from './pages/Cnpj';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cpf" component={Cpf} />
                <Route path="/cnpj" component={Cnpj} />
            </Switch> 
        </BrowserRouter>
    )
}