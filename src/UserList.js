// in src/Users.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceManyField, SingleFieldList} from 'admin-on-rest';
import TaskField from './TaskField';

export const UserList = (props) => (
    <List {...props} perPage={30} title="Who is doing what?">
        <Datagrid>
            <TextField source="id" sortable={false}/>
            <TextField source="full_name" sortable={false}/>
            <ReferenceManyField label="Tasks" reference="tasks" target="assigned_to" filter={{status__is_closed:false}}>
                <SingleFieldList>
                    <TaskField source="id" type="task" />
                </SingleFieldList>
            </ReferenceManyField>
            <ReferenceManyField label="Issues" reference="issues" target="assigned_to" filter={{status__is_closed:false}}>
                <SingleFieldList>
                    <TaskField source="id" type="issue" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
);
