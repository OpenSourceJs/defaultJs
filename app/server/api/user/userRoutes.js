const userRoutes = require('express').Router();
const logger = require('../../util/logger.js');
const { authenticateUser } = require('../../lib/auth.js');
const { userLogin, createUser, prepUserData } = require('./userModel.js');
const  sendAsJSON = (req, res, next) => {
  res.json(res.data);
}



userRoutes.route('/login')
  .post(userLogin, prepUserData, sendAsJSON);

userRoutes.route('/')
  .get(authenticateUser, prepUserData, sendAsJSON)
  .post(createUser, prepUserData, sendAsJSON);

module.exports = userRoutes;
