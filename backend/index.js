'use strict';

const server = require('./lib/server');
// const Chain = require('./model/chain');

process.env.PORT = 7000;

server.start();


console.log(`----------------------------------------\nThis Node is now Mining for the next block \n   'Ctrl+c' to stop mining\n----------------------------------------`);
// let stableChain = new Chain();
// stableChain.mine();
