'use strict';

const { Router } = require('express');
const jsonParser = require('body-parser').json();
const bearerAuth = require('../lib/middleware/bearer-auth');
const httpErrors = require('http-errors');

const Favorite = require('../model/favorite');

const favoriteRouter = (module.exports = new Router());

favoriteRouter.put('/favorite', bearerAuth, jsonParser, (request, response, next) => {
  if (!request.body) return next(new httpErrors(400, '__ERROR__ invalid request'));

  return Favorite.findOne({ user: request.user._id })
    .then(favorite => {
      if (!favorite) {
        throw httpErrors(404, '__ERROR__ favorite not found');
      }
      if (request.body.description) {
        favorite.set({ description: `${request.body.description}` });
      }
      return favorite
        .save()
        .then(updatedFavorite => response.json(updatedFavorite))
        .catch(next);
    })
    .catch(next);
});

favoriteRouter.get('/favorite/me', bearerAuth, (request, response, next) => {
  return Favorite.findOne({ user: request.user._id })
    .then(favorite => {
      if (!favorite) {
        throw new httpErrors(404, '__ERROR__ favorite not found');
      }
      return response.json(favorite);
    })
    .catch(next);
});
