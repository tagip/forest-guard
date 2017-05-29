import React from 'react';
import Chip from 'material-ui/Chip';
import { BASE_URL } from './consts';

const TaskField = ({ record = {}, type = 'task' }) =>
  <Chip style={{margin: 2}}>
    <a href={`${BASE_URL}/project/${record.project_extra_info.slug}/${type}/${record.ref}`} target="_blank" rel="noopener noreferrer">
      <span title={record.subject}>#{record.ref}: {record.subject}</span>
    </a>
  </Chip>;

export default TaskField;
