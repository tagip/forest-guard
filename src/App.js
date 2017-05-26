// in src/App.js
import React from 'react';
import { Admin, Resource, fetchUtils } from 'admin-on-rest';
import authClient from './authClient';
import jsonServerRestClient from './RestClient';

import { UserList } from './users';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

const API_URL = process.env.REACT_APP_API_URL || 'https://api.taiga.io/api/v1'

const restClient = jsonServerRestClient(API_URL, httpClient);

const App = () => (
    <Admin title="Forest Guard" restClient={restClient} authClient={authClient}>
        <Resource name="users" list={UserList} options={{ label: 'Who is doing what?' }}/>
        <Resource name="tasks" />
        <Resource name="issues" />
    </Admin>
);

export default App;
