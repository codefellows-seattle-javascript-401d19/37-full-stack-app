import reducers from '../reducer';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('testing reducers for proper behavior', () => {
  test('reducers', () => {
    let state;
  
    state = reducers(undefined, {});
    expect(state).toEqual({token: null, clientFavorites: null, clientWaves: null});
    state = reducers({token: null, clientFavorites: null, clientWaves: null}, {type: 'TOKEN_SET', payload: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw'});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: null, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: null, clientWaves: null}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: null}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: null}, {type: 'CLIENT_WAVE_SET', payload: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfaaaa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_WAVE_SET', payload: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_WAVE_SET', payload: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI2N2NkODMyNDliMzQzY2YyMjUxZjA0YTYyMzM5MjVmNmM0ZDA3NjQ1ZDQwMzEyYTQ1MDNlM2JkYTQ2MTllMTNiNDAxNTUxMmM0ODMwMmJiNzVmMjhiYzljMDEwZTYwMGVkZjYwMDQzM2VlMzI3MGI5NjI1M2JhMDVmNWQ3YzM5MiIsImlhdCI6MTUxNzIwNjQzMH0.MiG4jMt35NkruAQAh27nfXMvSnAHMZUTZg0XoH-7Vfw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'TOKEN_REMOVE'});
    expect(state).toEqual({token: null, clientFavorites: null, clientWaves: null});
    state = reducers({token: null, clientFavorites: null, clientWaves: null}, {type: 'TOKEN_SET', payload: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34'});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: null, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: null, clientWaves: null}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}, clientWaves: null}, {type: 'CLIENT_FAVORITES_SET', payload: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiIwMjBmZDg2NmM5NjlhNGY2YTI1ZjgxMjRlNjM4MDRmNDQ5YzdiZTI4N2ZhYzZmNDMxNzQzZTBjYzYxODdiN2MwYjRhNmQ1YTA5MTRiNjk4ZmU3YTAwMTY4NTQ0NjE1MDVkNTYwNmNmNTdjMmUwYmNlYjBmNWUyODQ3OGQxZjViMSIsImlhdCI6MTUxNzIwNjQ5MX0.SD5EvPZwuiczk20jGVAI4yxbiMhNsECcnPytjLTcY34', clientFavorites: {favorites: [], _id: '5a6ebbdb096f64654627ec5e', user: '5a6ebbdb096f64654627ec5d', __v: 0}, clientWaves: null}, {type: 'TOKEN_REMOVE'});
    expect(state).toEqual({token: null, clientFavorites: null, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI1OGQ5NDBkNjQyMmE2MmM3YjYwMjY0ZmU3NGE0ZjY1YmMyYjMyOTQwZTI4OWE5MTJkN2YwODU5MmQxZjI4MjFiZTJkZTI5ZjhiMmQ1ZTk5MDdjMjY4MjUyY2MzMjBjNzBjM2UwNTQxNWNlZmM3YTc4OTgyNTlmNTZiNjM0NjliNSIsImlhdCI6MTUxNzIwNjYyMX0.u8JzUODCVh0YfB7VpPAyep0euRU57bEBu7KmcuQMvYw', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'TOKEN_REMOVE'});
    expect(state).toEqual({token: null, clientFavorites: null, clientWaves: null});
    state = reducers({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiJkYjQxMzViMjk4ZjRmMmZkNWNlNjg0NjYwMGZjZmI2Mjg0YjcwOTE5MTQzNmQ2NDdjN2FiMTdlNjBhNTZmNDE1OGFhYjViMmIzYzY4ZTYwYjBlMWM5NTY3NGYyNTMwYzlhNDNjYjc5NmMyMTMyOTFhMDMzYzBhMTdjMDg2ZTA3NiIsImlhdCI6MTUxNzIwNjc3NX0.8Ffc0EU_DHZHOyHUNxqheJ3ts3SyezTNwlXj5-kBoDA', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: {_id: '5a6ebbb3096f64654627ec5c', wavename: 'asdf', user: '5a6a10851762c30bbc47d8a3', url: 'https://scramblevoxwaves.s3.us-west-2.amazonaws.com/8df29b43323015a7adba458ce07e327f.436f1e9951f091a66cabf154ab389466.wav', __v: 0}}, {type: 'CLIENT_WAVE_REMOVE'});
    expect(state).toEqual({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiJkYjQxMzViMjk4ZjRmMmZkNWNlNjg0NjYwMGZjZmI2Mjg0YjcwOTE5MTQzNmQ2NDdjN2FiMTdlNjBhNTZmNDE1OGFhYjViMmIzYzY4ZTYwYjBlMWM5NTY3NGYyNTMwYzlhNDNjYjc5NmMyMTMyOTFhMDMzYzBhMTdjMDg2ZTA3NiIsImlhdCI6MTUxNzIwNjc3NX0.8Ffc0EU_DHZHOyHUNxqheJ3ts3SyezTNwlXj5-kBoDA', clientFavorites: {favorites: [], _id: '5a6a10851762c30bbc47d8a4', user: '5a6a10851762c30bbc47d8a3', __v: 0, notes: 'asdfadsfa'}, clientWaves: null});
  });
});
