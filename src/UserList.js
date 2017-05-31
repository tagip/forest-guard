// in src/Users.js
import React from 'react';
import { List, Datagrid, TextField} from 'admin-on-rest';
import WorkInProgressField from './WorkInProgressField';

export const UserList = (props) => (
  <List {...props} perPage={30} title="Work In Progress">
      <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="full_name" sortable={false} label='Name'/>
          <WorkInProgressField source="id" sortable={false} label='Tasks/Issues' {...props} />
      </Datagrid>
  </List>
);
