import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import BugIcon from 'material-ui/svg-icons/action/bug-report';
import ExtensionIcon from 'material-ui/svg-icons/action/extension';
import { BASE_URL } from './consts';
import DueDate from './DueDate';

export default class TaskField extends React.Component {

  render() {
    const backgroundColor = typeof this.props.record.status_extra_info !== 'undefined' ? this.props.record.status_extra_info.color : '#e0e0e0';
    const link = typeof this.props.record.project_extra_info !== 'undefined' ? `${BASE_URL}/project/${this.props.record.project_extra_info.slug}/${this.props.type}/${this.props.record.ref}` : '#';

    return (
      <Chip style={{ margin: 4 }}>
        <Avatar
          backgroundColor={backgroundColor}
          title={this.props.type.toUpperCase()}
          icon={this.props.type === 'issue' ? <BugIcon /> : <ExtensionIcon />}
        />
        <a
          style={{ color: '#0e0e0e', textDecoration: 'none' }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-name">{this.props.record.project_extra_info.name} #{this.props.record.ref}</span>
          <span title={`${this.props.record.ref} ${this.props.record.subject} | ${this.props.record.status_extra_info.name}`}> - {this.props.record.subject}</span>
          <DueDate record={this.props.record} type={this.props.type} />
        </a>
      </Chip>);
  }
}
