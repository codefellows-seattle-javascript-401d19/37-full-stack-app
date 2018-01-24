'use strict';

const {Router} = require(`express`);
const jsonParser = require(`body-parser`).json();
const Favorites = require(`../model/favorites`);
const httpErrors = require(`http-errors`);

const bearerAuth = require(`../lib/middleware/bearer-auth`);

const favoritesRouter = module.exports = new Router();

favoritesRouter.get('/favorites/:id', bearerAuth, (request, response, next) => {
  return Favorites.findOne({user: request.params.id})
    .then(favorites => {
      if (!favorites) {
        throw new httpErrors(404, '__ERROR__ favorites not found');
      }
      return response.json(favorites);
    })
    .catch(next);
});

favoritesRouter.put('/favorites/:id', jsonParser, bearerAuth, (request, response, next) => {
  if (!request.body) {
    throw httpErrors(400, 'body is required');
  }

  return Favorites.findOne({user: request.params.id})
    .then(favorites => {
      if (!favorites) {
        throw httpErrors(404, 'favorites not found');
      }
      if (request.body.notes) {
        favorites.set({
          notes: `${request.body.notes}`,
        });
      }
      if (request.body.favorites) {
        favorites.set({
          favorites: request.body.favorites,
        });
      }
      
      return favorites.save()
        .then(updatedFavorites => response.json(updatedFavorites))
        .catch(next);
    })
    .catch(next);
});

