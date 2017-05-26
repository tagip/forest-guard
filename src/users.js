// in src/Users.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceManyField, SingleFieldList, ChipField} from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props} perPage={30}>
        <Datagrid>
            <TextField source="id" sortable={false}/>
            <TextField source="full_name" sortable={false}/>
            <ReferenceManyField label="Tasks" reference="tasks" target="assigned_to">
                <SingleFieldList>
                    <ChipField source="subject" />
                </SingleFieldList>
            </ReferenceManyField>
            <ReferenceManyField label="Issues" reference="issues" target="assigned_to">
                <SingleFieldList>
                    <ChipField source="subject" />
                </SingleFieldList>
            </ReferenceManyField>
        </Datagrid>
    </List>
);
