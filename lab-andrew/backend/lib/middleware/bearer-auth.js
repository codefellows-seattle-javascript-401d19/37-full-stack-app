'use strict';

const httpErrors = require('http-errors');
const User = require('../../model/user');
const jsonWebToken = require('jsonwebtoken');

const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (error, data) => {
      if(error)
        return reject(error);
      return resolve(data);
    });
  });
};

module.exports = (request, response, next) => {
  if(!request.headers.authorization)
    return next(new httpErrors(400, `__ERROR__ authorization header required`));

  const token = request.headers.authorization.split('Bearer ')[1];

  if(!token)
    return next(new httpErrors(400, `__ERROR__ token required`));

  return promisify(jsonWebToken.verify)(token, process.env.SECRET_SALT)
    .then(decryptedData => {
      return User.findOne({tokenSeed: decryptedData.tokenSeed});
    })
    .then(user => {
      if(!user)
        throw new httpErrors(404, `__ERROR__ not found`);
      request.user = user;
      return next();
    })
    .catch(next);
};
