// in src/App.js
import React from 'react';
import { Admin, Resource, englishMessages, resolveBrowserLocale } from 'admin-on-rest';
import frenchMessages from 'aor-language-french';
import germanMessages from 'aor-language-german';
import WorkIcon from 'material-ui/svg-icons/action/work';
import authClient from './authClient';
import { UserList } from './UserList';
import { restClient } from './RestClient';
import domainMessages from './i18n';
import Dashboard from './Dashboard';

const messages = {
  fr: { ...frenchMessages, ...domainMessages.fr },
  en: { ...englishMessages, ...domainMessages.en },
  de: { ...germanMessages, ...domainMessages.de },
};

const App = () => (
  <Admin title="Forest Guard" restClient={restClient} authClient={authClient} locale={resolveBrowserLocale()} messages={messages} dashboard={Dashboard}>
    <Resource name="users" list={UserList} icon={WorkIcon} />
    <Resource name="issues" />
    <Resource name="tasks" />
    <Resource name="project" />
  </Admin>
);

export default App;
