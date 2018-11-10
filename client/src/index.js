import React from 'react';
import reactDom from 'react-dom';
// import { Router } from 'react-router'; //browserHistory
import history from "./history.js";
import { Router, Route } from 'react-router-dom'; //BrowserRouter, 

import HomeTemp from './models/HomeTemp.jsx';
import App from './models/App.jsx';

reactDom.render((
<Router history={history}>
  <div>
    <Route exact path='/' component={HomeTemp} />
    <Route path='/username/:username' component={App} />
  </div>
</Router>
), document.getElementById('hist'));
