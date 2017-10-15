const bcrypt = require('bcrypt');
const db = require('../../lib/dbConnect.js');
const { getUserData, getUserToken } = require('../../lib/auth.js');
const { isValidEmail } = require('../../lib/validateEmail.js');
const saltRounds = 10;

const userLogin = (req, res, next) =>  {
  const values = [
    req.body.email.toLowerCase(),
    req.body.password
  ];

  const userObj = {};

    if (!(!values[0] || !values[1])) {
        if (!isValidEmail(values[0])) {
            next(new Error('Please submit a valid email address.'));
        } else {
            next();
        }
    } else {
        next(new Error('Logging in requires both an email and a password.'));
    }

    db.oneOrNone(`SELECT * FROM "users" WHERE email = $1;`, values[0])
      .then((data) => {
   if (!data) next(new Error('Invalid login credentials.'));

          if (!bcrypt.compareSync(values[1], data.values[1])) {
              next(new Error('Invalid login credentials.'));
          } else {
              for (let key in data) {
                  if (key !== 'password') userObj[key] = data[key];
              }
              getUserToken(userObj)
                  .then((token) => {
                      return res.token = token;
                  })
                  .then(() => {
                      return next();
                  })
                  .catch(err => next(err));
          }
  })
     .catch(err => next(err));
};



const createUser = (req, res, next) => {
  const values = [
       req.body.firstName,
       req.body.lastName,
       req.body.email.toLowerCase(),
       bcrypt.hashSync(req.body.password, saltRounds)
  ];

    if (values[0] || values[1] || values[2] || values[3]) {
        if (!isValidEmail(email)) {
            next(new Error('Please submit a valid email address.'));
        } else {
            next();
        }
    } else {
        next(new Error('Please check that all fields were filled out properly.'));
    }

db.one(`INSERT INTO "users" (firstName, lastName, email, password) VALUES ($1, $2, $3, $4);`, values)
    .then((data) => {
    getUserToken(data)
        .then((token) => {
        res.token = token
    })
        .then(() => {
        next()
    })
        .catch(err => next(err));
})
     .catch(err => next(err));
};



const prepUserData = (req, res, next) => {
    if (!res.token) {
        res.data = res.userData;
        next();
    } else {
        getUserData(res.token)
            .then((userData) => {
                res.data = {
                    token: res.token,
                    user_data: userData.data,
                };
            })
            .then(() => next())
            .catch(err => next(err));
    }
};

module.exports = {
    userLogin,
    createUser,
    prepUserData,
};
