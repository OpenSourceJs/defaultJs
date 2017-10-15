(function(express, path, server ) {

  'use strict';

  require('dotenv').config({ silent: true });
  express = require ('express');
  path = require('path');
  server = express();
  const { clientErr, serverErr } = require('./middleware/err.js');

  // setup the server middleware
  require('./middleware/serverMiddleware.js')(server);

  //serving the view page
  server.use(express.static(path.join(__dirname, '../assets/dist')));

  // setup the api


  // setup global handle errors
  server.use(clientErr);
  server.use(serverErr);

 // export the server for testing
  module.exports = server;

}.call(this));


