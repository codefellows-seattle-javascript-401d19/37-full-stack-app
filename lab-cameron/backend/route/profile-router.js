'use strict';

const { Router } = require('express');
const jsonParser = require('body-parser').json();
const httpErrors = require('http-errors');
const Profile = require('../model/profile');

const bearerAuthMiddleware = require('../lib/middleware/bearer-auth-middleware');

const profileRouter = module.exports = new Router();

profileRouter.post('/profiles', bearerAuthMiddleware, jsonParser, (request, response, next) => {
  if (!request.account && !request.phoneNumber) {
    return next(new httpErrors(404, '__ERROR__ no account, or phonenumber given'));
  }

  return new Profile({
    ...request.body,
    account: request.account._id,
  }).save()
    .then(profile => response.json(profile))
    .catch(next);
});

profileRouter.get('/profiles/me', bearerAuthMiddleware, (request, response, next) => {
  return Profile.findOne({ account: request.account._id })
    .then(profile => response.json(profile))
    .catch(next);
});

profileRouter.get('/profiles/:id', bearerAuthMiddleware, (request, response, next) => {
  if (!request.account) {
    return next(new httpErrors(404, '__ERROR__ Not Found'));
  }

  return Profile.findById(request.params.id)
    .then(profile => response.json(profile))
    .catch(next);
});


profileRouter.put('/profiles/:id', bearerAuthMiddleware, jsonParser, (request, response, next) => {
  if (!request.account) {
    return next(new httpErrors(404, '__ERROR__ Not Found'));
  }

  let options = { new: true, runValidators: true};


  return Profile.findByIdAndUpdate(request.params.id, request.body, options)
    .then(profile => {
      return response.json(profile);
    })
    .catchre(next);
});
