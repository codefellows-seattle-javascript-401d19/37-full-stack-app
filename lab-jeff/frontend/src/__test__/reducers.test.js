import reducers from '../reducer';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('reducers', () => {
  let state;
  state = reducers(
    {
      token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwNzExNDQ2NTRkYzAzYmU0YjhmNmY2ZTMxZTMxMWFkZGU2YTFjMmRhMmQ0NTM3MTQ4ZmExODUwNWRkMDEwZTY2YWE0OTI3OTg5Y2I1NjE0OTBmY2NkZWNhMTdjNzBmMThkYWI2ZWJmN2M3NzRjZDk2MTUyMzczMzMwNmY1NGQ5NCIsImlhdCI6MTUxNjg1NjU5M30.ku4cfdcWJOxgHPTu1-wfwqVnnRUSx6Hkuu4YIVr0gp4',
      favorite: null,
    },
    {
      type: 'FAVORITE_SET',
      payload: {
        favorites: [],
        _id: '5a693a74f3fde7ecf50438c3',
        user: '5a693a74f3fde7ecf50438c2',
        __v: 0,
        description: 'updated twice',
      },
    }
  );
  expect(state).toEqual({
    token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwNzExNDQ2NTRkYzAzYmU0YjhmNmY2ZTMxZTMxMWFkZGU2YTFjMmRhMmQ0NTM3MTQ4ZmExODUwNWRkMDEwZTY2YWE0OTI3OTg5Y2I1NjE0OTBmY2NkZWNhMTdjNzBmMThkYWI2ZWJmN2M3NzRjZDk2MTUyMzczMzMwNmY1NGQ5NCIsImlhdCI6MTUxNjg1NjU5M30.ku4cfdcWJOxgHPTu1-wfwqVnnRUSx6Hkuu4YIVr0gp4',
    favorite: {
      favorites: [],
      _id: '5a693a74f3fde7ecf50438c3',
      user: '5a693a74f3fde7ecf50438c2',
      __v: 0,
      description: 'updated twice',
    },
  });
  state = reducers(
    {
      token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwNzExNDQ2NTRkYzAzYmU0YjhmNmY2ZTMxZTMxMWFkZGU2YTFjMmRhMmQ0NTM3MTQ4ZmExODUwNWRkMDEwZTY2YWE0OTI3OTg5Y2I1NjE0OTBmY2NkZWNhMTdjNzBmMThkYWI2ZWJmN2M3NzRjZDk2MTUyMzczMzMwNmY1NGQ5NCIsImlhdCI6MTUxNjg1NjU5M30.ku4cfdcWJOxgHPTu1-wfwqVnnRUSx6Hkuu4YIVr0gp4',
      favorite: {
        favorites: [],
        _id: '5a693a74f3fde7ecf50438c3',
        user: '5a693a74f3fde7ecf50438c2',
        __v: 0,
        description: 'updated twice',
      },
    },
    { type: 'TOKEN_REMOVE' }
  );
  expect(state).toEqual({ token: null, favorite: null });
  state = reducers(
    { token: null, favorite: null },
    {
      type: 'TOKEN_SET',
      payload:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
    }
  );
  expect(state).toEqual({
    token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
    favorite: null,
  });
  state = reducers(
    {
      token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
      favorite: null,
    },
    {
      type: 'FAVORITE_SET',
      payload: {
        favorites: [],
        _id: '5a693a74f3fde7ecf50438c3',
        user: '5a693a74f3fde7ecf50438c2',
        __v: 0,
        description: 'updated twice',
      },
    }
  );
  expect(state).toEqual({
    token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
    favorite: {
      favorites: [],
      _id: '5a693a74f3fde7ecf50438c3',
      user: '5a693a74f3fde7ecf50438c2',
      __v: 0,
      description: 'updated twice',
    },
  });
  state = reducers(
    {
      token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
      favorite: {
        favorites: [],
        _id: '5a693a74f3fde7ecf50438c3',
        user: '5a693a74f3fde7ecf50438c2',
        __v: 0,
        description: 'updated twice',
      },
    },
    {
      type: 'FAVORITE_SET',
      payload: {
        favorites: [],
        _id: '5a693a74f3fde7ecf50438c3',
        user: '5a693a74f3fde7ecf50438c2',
        __v: 0,
        description: 'updated thrice',
      },
    }
  );
  expect(state).toEqual({
    token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1NTNmNTUzMWUwODkzMzA0MDA1YjMzMjQ1YmVlY2Q4N2Q3YTdmYTgzMzdhM2RjODIwNWJhMTUxZGRkZmIzNzNmMmE5Njc5YzQ1NjBiODFhNjdlZjU0NmJiZjgyMDBhZDFmYzczNmZkMDY1NjQzMWMzYjZkOTBmYTdlY2NjMmUyZiIsImlhdCI6MTUxNjg1NjkyNH0.ZrKd9UchCigHwGYwh6TWr1yW9kJq-h5wOzV81D_Dj2k',
    favorite: {
      favorites: [],
      _id: '5a693a74f3fde7ecf50438c3',
      user: '5a693a74f3fde7ecf50438c2',
      __v: 0,
      description: 'updated thrice',
    },
  });
});
