import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';
import { API_URL } from './consts';

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
                localStorage.setItem('token', user.auth_token);
                localStorage.setItem('user_id', user.id);
                localStorage.setItem('full_name', user.full_name);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('full_name');
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
    }
    return Promise.resolve();
}
