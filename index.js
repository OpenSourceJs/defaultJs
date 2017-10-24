(function  (config, server, logger, open) {

 'use strict';

  open = require('open');
  config = require('./config/config.js');
  server = require('./app/server/server.js');
  logger = require ('./app/server/util/logger.js');

  server.listen(config.port, (err) => {
   if (err) {
    console.log(err)
   } else {
     open(`http://localhost:${config.port}`);
   }
  });

  logger.log(`=====> 🌎 Listening on http//localhost:${config.port}`);

}.call(this));
