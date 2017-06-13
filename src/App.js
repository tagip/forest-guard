// in src/App.js
import React from 'react';
import { Admin, Resource, fetchUtils } from 'admin-on-rest';
import authClient from './authClient';
import jsonServerRestClient from './RestClient';

import { UserList } from './UserList';
import { API_URL } from './consts';
import { restClient } from './RestClient';

const App = () => (
    <Admin title="Forest Guard" restClient={restClient} authClient={authClient}>
        <Resource name="users" list={UserList} options={{ label: 'Work In Progress' }}/>
        <Resource name="tasks" />
        <Resource name="issues" />
        <Resource name="project" />
    </Admin>
);

export default App;
