import reducers from '../reducer';

test('reducers', () => {
  let state;
  state = reducers({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI4YzRjM2Y1YjQ4N2JjODc3Y2IzOTE4NjdhMzdhMDkzNDliOTg4NzNkMmI4MjdmYjE5ODYwM2U1MWFlYmMxZDhkMWNlMWU2ZGM4OWE1OWMyZTE2ODU4MjgxZmU2YTEyMmY3MTg1OGFhZTAzZGQ2OWI1MGYyNDgxMGUxMDJhNzliMSIsImlhdCI6MTUxNzE3NTUwMn0.Y6TrI5Zdh-5SmBGwBubKfvOYSNpu64LjVsDYE3hh8KU',clientProfile:null}, {type:'CLIENT_PROFILE_SET',payload:{meetups:['aa;jfa'],_id:'5a6e4242c8ef1fdcaeda4a75',meetupMemberId:240616154,name:'Catherine Looper',phoneNumber:'938393839',account:'5a6e359bc8ef1fdcaeda4a73',__v:0}});
  expect(state).toEqual({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblNlZWQiOiI4YzRjM2Y1YjQ4N2JjODc3Y2IzOTE4NjdhMzdhMDkzNDliOTg4NzNkMmI4MjdmYjE5ODYwM2U1MWFlYmMxZDhkMWNlMWU2ZGM4OWE1OWMyZTE2ODU4MjgxZmU2YTEyMmY3MTg1OGFhZTAzZGQ2OWI1MGYyNDgxMGUxMDJhNzliMSIsImlhdCI6MTUxNzE3NTUwMn0.Y6TrI5Zdh-5SmBGwBubKfvOYSNpu64LjVsDYE3hh8KU',clientProfile:{meetups:['aa;jfa'],_id:'5a6e4242c8ef1fdcaeda4a75',meetupMemberId:240616154,name:'Catherine Looper',phoneNumber:'938393839',account:'5a6e359bc8ef1fdcaeda4a73',__v:0}});
});