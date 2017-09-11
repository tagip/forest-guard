import React, { Component } from 'react';
import { BASE_URL } from './consts';

class TaigaLink extends Component {
  render() {
    const link = typeof this.props.record.project_extra_info !== 'undefined' ? `${BASE_URL}/project/${this.props.record.project_extra_info.slug}/${this.props.type}/${this.props.record.ref}` : '#';

    return (
      <a
        style={{ color: '#0e0e0e', textDecoration: 'none' }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="project-name">{this.props.record.project_extra_info.name} #{this.props.record.ref}</span>
        <span title={`${this.props.record.ref} ${this.props.record.subject} | ${this.props.record.status_extra_info.name}`}> - {this.props.record.subject} - {this.props.record.status_extra_info.name}</span>
      </a>
    );
  }
}

export default TaigaLink;
