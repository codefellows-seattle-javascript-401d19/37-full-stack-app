'use strict';

const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wave',
      },
    ],
    description: {
      type: String,
    },
  },
  { usePushEach: true }
);

module.exports = mongoose.model('favorite', favoriteSchema);
