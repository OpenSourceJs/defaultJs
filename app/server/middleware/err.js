(function (path, clientErr, serverErr) {
  'use strict';

   path = require('path');

  clientErr = (err, req, res, next)  => {
     console.error(err.message);
     res.status(404).sendFile(path.join(__dirname, '../../public/notFound.html'));
     next();
  };

  serverErr = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).sendFile(path.join(__dirname, '../../public/internalServerError.html'));
    next();
  };

  module.exports = {
   clientErr,
   serverErr
 };

}.call(this));

