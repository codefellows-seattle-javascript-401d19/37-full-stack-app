import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducers from '../src/reducer';

Enzyme.configure({adapter: new Adapter()});

describe('Frontend magic', () => {

  test('reducers', () => {
    let state = null;

    state = reducers(undefined, {});

    expect(state).toEqual({token:null,profile:null});

    state = reducers({token:null,profile:null}, {type:'TOKEN_SET',payload:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww'});

    expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:null});

    state = reducers({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:null}, {type:'PROFILE_SET',payload:{__v:0,owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'This is my super cool profile.',_id:'5a6abf631498a3132e15c7a6'}});

    expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:{__v:0,owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'This is my super cool profile.',_id:'5a6abf631498a3132e15c7a6'}});

    state = reducers({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:{__v:0,owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'This is my super cool profile.',_id:'5a6abf631498a3132e15c7a6'}}, {type:'PROFILE_SET',payload:{_id:'5a6abf631498a3132e15c7a6',owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'Check it out, my profile is updated!',__v:0}});

    expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:{_id:'5a6abf631498a3132e15c7a6',owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'Check it out, my profile is updated!',__v:0}});

    state = reducers({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMGZpRXF6cEY0ZVhsMWE4Q1B4L0tQbWNWOGprUU53UExESWdSY1kyQS84az0iLCJpYXQiOjE1MTY5NDAyMDB9.1zds42XEjkgS9FbH2O8Fot6ZABytrimdd3NRyTLCTww',profile:{_id:'5a6abf631498a3132e15c7a6',owner:'5a6aaba81498a3132e15c7a5',username:'RobTheBlob',email:'RobTheBlob@blob.com',bio:'Check it out, my profile is updated!',__v:0}}, {type:'TOKEN_REMOVE'});
    expect(state).toEqual({token:null,profile:null});

    state = reducers({token:null,profile:null}, {type:'TOKEN_SET',payload:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMFVaNEdoNW1rUFNqZFBPaDkrQlA3OTJHd25DQWE1TTdIVVlUK3RtODlCcz0iLCJpYXQiOjE1MTY5NDUzNDl9.8SFgTp0YYSVFifgUiCpr_y_JFOmJvETnsqtGtm15TBQ'});

    expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMFVaNEdoNW1rUFNqZFBPaDkrQlA3OTJHd25DQWE1TTdIVVlUK3RtODlCcz0iLCJpYXQiOjE1MTY5NDUzNDl9.8SFgTp0YYSVFifgUiCpr_y_JFOmJvETnsqtGtm15TBQ',profile:null});

    state = reducers({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMFVaNEdoNW1rUFNqZFBPaDkrQlA3OTJHd25DQWE1TTdIVVlUK3RtODlCcz0iLCJpYXQiOjE1MTY5NDUzNDl9.8SFgTp0YYSVFifgUiCpr_y_JFOmJvETnsqtGtm15TBQ',profile:null}, {type:'PROFILE_SET',payload:{_id:'5a698f70625747b1c7e5a7b5',owner:'5a694576625747b1c7e5a7af',username:'2',email:'2@2.com',bio:'hey hey hey hi',__v:0}});

    expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiMFVaNEdoNW1rUFNqZFBPaDkrQlA3OTJHd25DQWE1TTdIVVlUK3RtODlCcz0iLCJpYXQiOjE1MTY5NDUzNDl9.8SFgTp0YYSVFifgUiCpr_y_JFOmJvETnsqtGtm15TBQ',profile:{_id:'5a698f70625747b1c7e5a7b5',owner:'5a694576625747b1c7e5a7af',username:'2',email:'2@2.com',bio:'hey hey hey hi',__v:0}});
  });
});