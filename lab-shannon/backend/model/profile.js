'use strict';

const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  owner: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  bio: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
});

const Profile = module.exports = mongoose.model('profile', profileSchema);

Profile.create = (profile, user) => {
  return new Profile({
    owner: user._id,
    username: user.username,
    bio: profile.bio,
  })
    .save()
    .then(profile => {
      user.profile = profile._id;
      return user
        .save()
        .then(() => profile);
    });
};

Profile.update = (request) => {
  let options = {runValidators: true};
  console.log(Profile.findByIdAndUpdate(request.params.id, {bio: request.body.bio}, options), `result of find and update`);
  return Profile.findByIdAndUpdate(request.params.id, {bio: request.body.bio}, options);
};
