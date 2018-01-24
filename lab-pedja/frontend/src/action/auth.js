import superagent from "superagent";
import * as routes from "../routes";

// ==========================================
// SYNC
// ==========================================
export const setTokenAction = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

// ==========================================
// ASYNC 
// ==========================================
export const signupAction = company => store => {
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`)
  .send(company)
  .withCredentials()
  .then(response => {
    console.log({response});
    return store.dispatch(setTokenAction(response.text));
  });
};

export const loginAction = company => store => {
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`)
    .auth(company.companyName, company.password)
    // .withCredentials()
    .then(response => {
      console.log(response);
      return store.dispatch(setTokenAction(response.text));
    });
};