import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import BugIcon from 'material-ui/svg-icons/action/bug-report';
import ExtensionIcon from 'material-ui/svg-icons/action/extension';
import { BASE_URL } from './consts';

const TaskField = function ({ record = {}, type = 'task' }) {
  const backgroundColor = typeof record.status_extra_info !== 'undefined' ? record.status_extra_info.color : '#e0e0e0';
  const link = typeof record.project_extra_info !== 'undefined' ? `${BASE_URL}/project/${record.project_extra_info.slug}/${type}/${record.ref}` : '#'
  return (
    <Chip style={{margin: 4}}>
      <Avatar
        backgroundColor={backgroundColor}
        title={type.toUpperCase()}
        icon={type === 'issue' ? <BugIcon /> : <ExtensionIcon />}
      />
      <a
        style={{color: '#0e0e0e', textDecoration: 'none'}}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span title={`${record.ref} ${record.subject} | ${record.status_extra_info.name}`}>#{record.ref} {record.subject}</span>
      </a>
    </Chip>);
}

export default TaskField;
