// dump files in here from code base

// let CookieTime = (days) => {
//   let result = new Date()
//   result.setTime(result.getTime() + (days * 86400000))
//   return result.toUTCString()
// }

// export const CookieCreate = (name, value, days) => {
//   let expires = days ? ` ${cookieTime(days));` : '
//   document.cookie = `${name}=${value};${expires} path='/'`
// }

export const cookieFetchAll = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()] : value};
    }));
};

export const cookieDelete = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const cookieFetch = (key) => {
  return cookieFetchAll()[key];
};