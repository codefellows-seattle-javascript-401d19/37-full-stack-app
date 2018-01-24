'use strict';

const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  owner: {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
});

const Profile = module.exports = mongoose.model('profile', profileSchema);

profileSchema.create = (user) => {
  return new Profile({
    owner: user._id,
    name: user.name,
    bio: user.bio,
  })
    .save()
    .then(profile => {
      user.profile = profile._id;
      return user
        .save()
        .then(() => profile);
    });
};

profileSchema.update = (request) => {
  let options = {new: true, runValidators: true};
  return Profile.findByIdAndUpdate(request.params.id, {bio: request.body.bio}, options);
};
