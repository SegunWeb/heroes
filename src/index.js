import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./Home/Home"
import Marvel from "./Marvel/Marvel"
import Dc from "./Dc/Dc"
import Contacts from "./Contacts/Contacts"

import 'tachyons';
import './index.css';

ReactDOM.render(
    (<BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/marvel' component={Marvel} />
                <Route path='/dc' component={Dc} />
                <Route path='/contacts' component={Contacts} />
            </Switch>
        </App>
    </BrowserRouter>), document.getElementById('root'));
serviceWorker.unregister();
