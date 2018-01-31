'use strict';

const reverse = require('../../../lib/transforms/reverse');

describe(`reverse transform`, () => {
  test('expect that reverse transform changes values for 8 bit file', () => {
    const file = {};
    file.bitsPerSample = 8;
    file.data = Buffer.from([248, 129, 70, 4]);
    reverse(file);
    expect(file.data[0]).toEqual(4);
    expect(file.data[1]).toEqual(70);
    expect(file.data[2]).toEqual(129);
    expect(file.data[3]).toEqual(248);
  });

  test('expect that reverse transform changes values for 16 bit file', () => {
    const bigFile = {};
    bigFile.bitsPerSample = 16;
    bigFile.data = Buffer.from(new Uint16Array(8));
    bigFile.data.writeUInt16LE(50000, 0);
    bigFile.data.writeUInt16LE(33000, 2);
    bigFile.data.writeUInt16LE(20000, 4);
    bigFile.data.writeUInt16LE(100, 6);
    reverse(bigFile);
    expect(bigFile.data.readUInt16LE(0)).toEqual(100);
    expect(bigFile.data.readUInt16LE(2)).toEqual(20000);
    expect(bigFile.data.readUInt16LE(4)).toEqual(33000);
    expect(bigFile.data.readUInt16LE(6)).toEqual(50000);
  });
});
