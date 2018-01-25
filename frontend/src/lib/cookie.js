


export const cookieFetchAll = () => {
  return Object.assign(...document.cookie.split(';')
    .map(cookie => cookie.split('=')));
};
