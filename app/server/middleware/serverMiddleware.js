const logger = require ('morgan');
const bodyParser = require ('body-parser');
const helmet = require('helmet');
const compression = require('compression');

// setup global function middleware here
module.exports = function(server) {
  server.use(compression());
  server.use(helmet());
  server.use(logger('dev'));
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token_authorization");
    next();
  });
  server.use(bodyParser.json());
};


