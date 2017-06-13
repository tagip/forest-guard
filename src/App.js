// in src/App.js
import React from 'react';
import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'admin-on-rest';
import frenchMessages from 'aor-language-french';
import authClient from './authClient';
import { UserList } from './UserList';
import { restClient } from './RestClient';

const messages = {
  fr: frenchMessages,
  en: englishMessages,
};

const App = () => (
  <Admin title="Forest Guard" restClient={restClient} authClient={authClient} locale={resolveBrowserLocale()} messages={messages}>
    <Resource name="users" list={UserList} options={{ label: 'Work In Progress' }} />
    <Resource name="tasks" />
    <Resource name="issues" />
    <Resource name="project" />
  </Admin>
);

export default App;
