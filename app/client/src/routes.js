import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';


module.exports = (
  <Route path='/' component={App}>
   <IndexRoute component={HomePage} />
  </Route>
);
