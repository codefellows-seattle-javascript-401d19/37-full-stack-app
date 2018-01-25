import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = (profile) => ({
	type: 'CLIENT_PROFILE_SET',
	payload: profile,
});

export const createAction = (profile) => (store) => {
	let {token} = store.getState();

	return superagent.post(`http://localhost:3000${routes.PROFILES_ROUTE}`)
		.set('Authorization', `Bearer ${token}`)
		.set('Content-Type', 'application/json')
		.send(profile)
		.then(response => {
			return store.dispatch(setAction(response.body))
		});
}

export const updateAction = (profile) => (store) => {
	let {token} = store.getState();

	return superagent.put(`http://localhost:3000${routes.PROFILES_ROUTE}/${profile._id}`)
		.set('Authorization',`Bearer ${token}`)
		.set('Content-Type', 'application/json')
		.send(profile)
		.then(response => {
			return store.dispatch(setAction(response.body));
		});
}

export const fetchAction = () => (store) => {
	let {token} = store.getState();

	return superagent.get(`http://localhost:3000${routes.PROFILES_ROUTE}/me`)
		.set('Authorization', `Bearer ${token}`)
		.then(response => {
			console.log(response);
			return store.dispatch(setAction(response.body));
		});
}