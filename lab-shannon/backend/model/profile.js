'use strict';

const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  owner: {
    type : mongoose.Schema.Types.ObjectId,
    required : true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
});

const Profile = module.exports = mongoose.model('profile', profileSchema);

Profile.create = (profile, user) => {
  console.log(`groot`);
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
  return Profile.findByIdAndUpdate(request.params.id, {bio: request.body.bio}, options);
};
