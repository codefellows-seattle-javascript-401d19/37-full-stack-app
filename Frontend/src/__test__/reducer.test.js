import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import reducers from '../reducer';

Enzyme.configure({adapter: new Adapter()});


test('reducers', () => {
	let state;
	
	state = reducers({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiR0JDRHc1K002aTZwbTJSUnJjTkZBY0ZvOThPK1ZLOXk0WG11aWJkWFhWRT0iLCJpYXQiOjE1MTY5MTg5ODB9.QiubjGkShK-Qzx0eiwhtTx2WYRXi85pKXeO6ga2qt4c', clientProfile: { _id: '5a6980a6f1d9da33a5066be3', owner: '5a69154099d6422d464ec2ca', username: 'kerry', email: 'kerry@kerry.com', bio: 'hey', __v: 0 }, clientPhotos: [] }, { type: 'CLIENT_PHOTO_CREATE', payload: { _id: '5a6eb72e5e0c161d2cb9d564', owner: '5a69154099d6422d464ec2ca', profile: { _id: '5a6980a6f1d9da33a5066be3', owner: '5a69154099d6422d464ec2ca', username: 'kerry', email: 'kerry@kerry.com', bio: 'hey', __v: 0 }, url: 'https://sluggramkerry.s3.us-west-2.amazonaws.com/c23e358ba5826ef501529414d436eb2c.Adams_The_Tetons_and_the_Snake_River.jpg', description: 'Mountainnnn', __v: 0, comments: [] } });
	expect(state).toEqual({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyYW5kb21IYXNoIjoiR0JDRHc1K002aTZwbTJSUnJjTkZBY0ZvOThPK1ZLOXk0WG11aWJkWFhWRT0iLCJpYXQiOjE1MTY5MTg5ODB9.QiubjGkShK-Qzx0eiwhtTx2WYRXi85pKXeO6ga2qt4c', clientProfile: { _id: '5a6980a6f1d9da33a5066be3', owner: '5a69154099d6422d464ec2ca', username: 'kerry', email: 'kerry@kerry.com', bio: 'hey', __v: 0 }, clientPhotos: [{ _id: '5a6eb72e5e0c161d2cb9d564', owner: '5a69154099d6422d464ec2ca', profile: { _id: '5a6980a6f1d9da33a5066be3', owner: '5a69154099d6422d464ec2ca', username: 'kerry', email: 'kerry@kerry.com', bio: 'hey', __v: 0 }, url: 'https://sluggramkerry.s3.us-west-2.amazonaws.com/c23e358ba5826ef501529414d436eb2c.Adams_The_Tetons_and_the_Snake_River.jpg', description: 'Mountainnnn', __v: 0, comments: [] }] });
});