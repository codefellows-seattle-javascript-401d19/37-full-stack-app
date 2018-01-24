export const cookieFetchAll = () => {
  return Object.assign(...document.cookie.split(';'))
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return {[key.trim()]: value};
    });
};