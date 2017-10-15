(function (pg, color, config, db) {
  'use strict';

   pg = require('pg-promise')();
   color = require('colore/safe');

   config = process.env.DATABASE_URL || {
    host:        process.env.DB_HOST,
    port:        process.env.DB_PORT,
    database:    process.env.DB_NAME,
    user:        process.env.DB_USER,
    password:    process.env.DB_PASS,
    env:         process.env.DB_ENV
  };

  colors.setTheme({
    data: ['white', 'bgBlack', 'underline', 'dim','italic']
  });

  console.log(color.data(config));
   db = pg(config);

  module.exports = db;

}.call(this));
