import React from 'react';
import { List, Datagrid } from 'admin-on-rest';
import TaigaLink from './TaigaLink';

export const TaskList = (props) => (
  <List {...props} perPage={30} filter={{ status__is_closed: false, assigned_to: localStorage.getItem('user_id') }}>
    <Datagrid>
      <TaigaLink record={props.record} type={props.resource.replace(/s$/, '')} />
    </Datagrid>
  </List>
);
