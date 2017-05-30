import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const TaskList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="subject"/>
      <TextField source="status_extra_info.name" label="Status"/>
      <TextField source="assigned_to_extra_info.full_name_display" label="Assignee"/>
    </Datagrid>
  </List>
);
