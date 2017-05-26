// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import authClient from './authClient';

import { UserList } from './users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://taiga.tag-ip.com/api/v1/')} authClient={authClient}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
