import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cpf from './pages/Cpf';
import Cnpj from './pages/Cnpj';
import CnpjValidator from './pages/CnpjValidator';
import CpfValidator from './pages/CpfValidator';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cpf" component={Cpf} />
                <Route path="/cnpj" component={Cnpj} />
                <Route path="/cnpjvalidator" component={CnpjValidator} />
                <Route path="/cpfvalidator" component={CpfValidator} />
            </Switch> 
        </BrowserRouter>
    )
}