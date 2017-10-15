(function  (config, server, logger) {

  'use strict';

  config = require('./config/config.js');
  server = require('./app/server/server.js');
  logger = require ('./app/server/util/logger.js');
  server.listen(config.port);
  logger.log('=====> 🌎 Listening on http//localhost:' + config.port);

}.call(this));
