
/* action types */

export const SET_TOKEN = 'set_token';


/* action creators */

export function setToken(token) {
  return { type: SET_TOKEN, token }
}