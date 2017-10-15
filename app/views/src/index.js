'use strict';
import React from 'react';
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router';
import 'whatwg-fetch';
import routes from './routes.js';


ReactDOM.render (
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root-container')
);
