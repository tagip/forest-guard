// in src/App.js
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import authClient from './authClient';
import jsonServerRestClient from './RestClient';

import { UserList } from './users';

const App = () => (
    <Admin title="Forest Guard" restClient={jsonServerRestClient('http://taiga.tag-ip.com/api/v1')} authClient={authClient}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
