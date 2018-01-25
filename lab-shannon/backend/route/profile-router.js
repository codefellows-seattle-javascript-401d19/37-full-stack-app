'use strict';

const {Router} = require('express');
const jsonParser = require(`body-parser`).json();
const httpErrors = require(`http-errors`);
const bearerAuth = require('../lib/middleware/bearer-auth');
const Profile = require('../model/profile');

const profileRouter = module.exports = new Router();

profileRouter.post('/profile', bearerAuth, jsonParser, (request, response, next) => {
  return Profile.create(request.body, request.user)
    .then(profile => response.json(profile))
    .catch(next);
});

profileRouter.put('/profile/:id', bearerAuth, jsonParser, (request, response, next) => {
  return Profile.update(request)
    .then(profile => response.json(profile))
    .catch(next);
});

profileRouter.get('/profile/myProfile', bearerAuth, (request, response, next) => {
  return Profile.findOne({owner: request.params._id})
    .then(profile => {
      if(!profile){
        throw new httpErrors(404, `__ERROR__ no profile found`);
      }
      return response.json(profile);
    })
    .catch(next);
});
