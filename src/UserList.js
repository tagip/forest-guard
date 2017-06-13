// in src/Users.js
import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import WorkInProgressField from './WorkInProgressField';

export const UserList = (props) => (
  <List {...props} perPage={30} title="fg.work_in_progress">
    <Datagrid>
      <TextField source="id" sortable={false} />
      <TextField source="full_name" sortable={false} />
      <WorkInProgressField source="tasks_issues" sortable={false} {...props} />
    </Datagrid>
  </List>
);
