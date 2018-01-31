import superagent from 'superagent';
import * as routes from '../routes';
import {cookieDelete} from '../lib/cookie'

export const setTokenAction = (token) => ({
	type: 'TOKEN_SET',
	payload: token,
});

export const removeTokenAction = () => ({
	type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
	cookieDelete('X-Sluggram-Token');
	return removeTokenAction();
};

export const signupAction = (user) => (store) => {
	return superagent.post(`http://localhost:3000${routes.SIGNUP_ROUTE}`)
	.send(user)
	.withCredentials()
	.then(response => {
		console.log({response});
		return store.dispatch(setTokenAction(response.text));
	});
};

export const loginAction = (user) => (store) => {
	return superagent.get(`http://localhost:3000${routes.LOGIN_ROUTE}`)
	.auth(user.username, user.password)
	.withCredentials()
	.then(response => {
		console.log({response});
		return store.dispatch(setTokenAction(response.text));
	});
};