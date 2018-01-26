export const fetchAllCookies = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return {[key.trim()] : value};
    }));
};

export const fetchCookie = (key) => {
  console.log(`cookies ran`);
  console.log(key, `key`);
  console.log(fetchAllCookies()[key], `result`);
  return fetchAllCookies()[key];
};

export const deleteCookie = (key) => {
  document.cookie = `${key}=; expires =Thu, 01 Jan 1970 00:00:01 GMT;`;
};
