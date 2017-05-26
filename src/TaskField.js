import React from 'react';
import Chip from 'material-ui/Chip';

const TaskField = ({ record = {} }) => <Chip style={{margin: 2}}><span title={record.subject}>#{record.ref}: {record.subject}</span></Chip>;

export default TaskField;
