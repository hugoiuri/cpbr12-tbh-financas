import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, ContractPage } from './pages';
import * as serviceWorker from './serviceWorker';

import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path={"/contract/:id"} component={ContractPage} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
