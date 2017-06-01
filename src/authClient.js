import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'admin-on-rest';
import { API_URL } from './consts';

const setCurrentUser = (user) => {
  localStorage.setItem('token', user.auth_token);
  localStorage.setItem('user_id', user.id);
  localStorage.setItem('full_name', user.full_name);
}

const clearCurrentUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('full_name');
}

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(API_URL + '/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password, type: "normal" }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((user) => {
                setCurrentUser(user);
            });
    }
    if (type === AUTH_LOGOUT) {
        clearCurrentUser();
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    }
    if (type === AUTH_ERROR) {
      const { status } = params;
      if (status === 401 || status === 403) {
        clearCurrentUser();
        return Promise.reject();
      }
      return Promise.resolve();
    }
    return Promise.resolve();
}
