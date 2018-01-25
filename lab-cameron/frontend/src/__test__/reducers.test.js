import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import clientProfile from '../reducer/client-profile';
import token from '../reducer/token';

describe('reducers', () => {
  describe('clientProfile reducer', () => {
    describe('CLIENT_PROFILE_SET', () => {
      test('should take a state and payload and return updated payload', () => {
        const state = null;
        const action = {
          type: 'CLIENT_PROFILE_SET',
          payload: {
            name: 'test',
            meetupMemberId: 123,
            phoneNumber: 123,
            account: 123,
          },
        };

        const result = clientProfile(state, action);

        expect(result).toEqual(action.payload);
      });
    });
  });

  describe('token reducer', () => {
    test('TOKEN_SET', () => {

      const state = null;
      const action = {
        type: 'TOKEN_SET',
        payload: {
          name: 'test',
        },
      };

      const result = token(state, action);

      expect(result).toEqual(action.payload);
    });

    test('TOKEN_REMOVE', () => {
      const state = 'something';
      const action = {
        type: 'TOKEN_REMOVE',
      };

      const result = token(state, action);

      expect(result).toEqual(null);
    });
  });
});
