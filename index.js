const config = require('./config/config.js');
const server = require('./app/server/server.js');
const logger = require ('./app/server/util/logger.js');


server.listen(config.port);
logger.log('=====> 🌎 Listening on http//localhost:' + config.port);
