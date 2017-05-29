import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { BASE_URL } from './consts';

const TaskField = function ({ record = {}, type = 'task' }) {
  const backgroundColor = record.status_extra_info.color || '#e0e0e0';
  return (
    <Chip style={{margin: 2}}>
      <Avatar backgroundColor={backgroundColor}>
      </Avatar>
      <a
        style={{color: '#0e0e0e', textDecoration: 'none'}}
        href={`${BASE_URL}/project/${record.project_extra_info.slug}/${type}/${record.ref}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span title={record.subject}>#{record.ref}:{record.subject}</span>
      </a>
    </Chip>);
}

export default TaskField;
