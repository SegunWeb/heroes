import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/containers/App';
import Routers from './Routers';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./Home"
import Contacts from "./Contacts"
import Posts from "./Posts"

import 'tachyons';
import './index.css';

ReactDOM.render(
    (<BrowserRouter>
        {/*<App />*/}
        <Routers>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/posts' component={Posts} />
            </Switch>
        </Routers>
    </BrowserRouter>), document.getElementById('root'));
serviceWorker.unregister();
