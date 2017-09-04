// in src/App.js
import React from 'react';
import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'admin-on-rest';
import frenchMessages from 'aor-language-french';
import germanMessages from 'aor-language-german';
import authClient from './authClient';
import { UserList } from './UserList';
import { TaskList } from './TaskList';
import { restClient } from './RestClient';
import domainMessages from './i18n';

const messages = {
  fr: { ...frenchMessages, ...domainMessages.fr },
  en: { ...englishMessages, ...domainMessages.en },
  de: { ...germanMessages, ...domainMessages.de },
};

const App = () => (
  <Admin title="Forest Guard" restClient={restClient} authClient={authClient} locale={resolveBrowserLocale()} messages={messages}>
    <Resource name="users" list={UserList} />
    <Resource name="issues" list={TaskList} title="fg.assigned_issues"/>
    <Resource name="tasks" list={TaskList} title="fg.assigned_tasks" />
    <Resource name="project" />
  </Admin>
);

export default App;
