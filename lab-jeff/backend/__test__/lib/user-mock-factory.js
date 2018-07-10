'use strict';

const User = require(`../../model/user`);
const faker = require(`faker`);

const userMockFactory = module.exports = {};

userMockFactory.create = () => {
  let mock = {};
  mock.request = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  return User.create(mock.request.username, mock.request.email, mock.request.password)
    .then(user => {
      mock.user = user;
      return user.createToken();
    })
    .then(token => {
      mock.token = token;
      return User.findById(mock.user._id);
    })
    .then(user => {
      mock.user = user;
      return mock;
    })
    .catch(err => console.error('user-mock-factory: user.create error: ', err));
};

userMockFactory.remove = () => User.remove({});
