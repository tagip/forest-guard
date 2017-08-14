// in src/App.js
import React from 'react';
import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'admin-on-rest';
import frenchMessages from 'aor-language-french';
import authClient from './authClient';
import { UserList } from './UserList';
import { TaskList } from './TaskList';
import { restClient } from './RestClient';
import domainMessages from './i18n';

const messages = {
  fr: { ...frenchMessages, ...domainMessages.fr },
  en: { ...englishMessages, ...domainMessages.en },
};

const App = () => (
  <Admin title="Forest Guard" restClient={restClient} authClient={authClient} locale={resolveBrowserLocale()} messages={messages}>
    <Resource name="users" list={UserList} />
    <Resource name="issues" list={TaskList} />
    <Resource name="tasks" />
    <Resource name="project" />
  </Admin>
);

export default App;
