'use strict';

const mongoose = require('mongoose');

const favoritesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wave',
  }],
  notes: {
    type: String,
  },
},{
  usePushEach: true,
});

module.exports = mongoose.model('favorite', favoritesSchema);