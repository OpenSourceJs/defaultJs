(function () {

  'use strict';

  const helmet = require('helmet');
  const logger = require ('morgan');
  const responseTime = require('response-time');
  const compression = require('compression');
  const bodyParser = require ('body-parser');

  // setup global function middleware here
  module.exports = function(server) {
    server.use(helmet());
    server.use(logger('dev'));
    server.use(compression());
    server.use(responseTime());
    server.use(bodyParser.json());
    server.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_authorization");
      next();
    });
  };

}.call(this));



