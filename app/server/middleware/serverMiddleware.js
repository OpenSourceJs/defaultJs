(function(helmet, logger, responseTime, compression, bodyParser) {

  'use strict';

  helmet = require('helmet');
  logger = require ('morgan');
  responseTime = require('response-time');
  compression = require('compression');
  bodyParser = require ('body-parser');

  // setup global function middleware here
  module.exports = (server) => {
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



