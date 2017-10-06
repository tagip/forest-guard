import React, { Component } from 'react';
import { GET_LIST } from 'admin-on-rest';
import withWidth from 'material-ui/utils/withWidth';
import { map, extend, merge } from 'lodash';
import { restClient } from './RestClient';
import MyProjects from './MyProjects';
import Issues from './Issues';
import Tasks from './Tasks';

class Dashboard extends Component {
  state = {issues: [], tasks: [], unassigned_issues: []};

  componentDidMount() {
    const user_id = localStorage.getItem('user_id');

    restClient(GET_LIST, 'projects', {
      filter: { member: user_id },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      this.setState({projects: response.data})
    })

    restClient(GET_LIST, 'issues', {
      filter: {
        assigned_to: user_id,
        status__is_closed: false
      },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      const issues = map(response.data, issue => extend(issue, {type: "issue"}))
      this.setState({issues: merge(this.state.issues, issues)})
    })

    restClient(GET_LIST, 'issues', {
      filter: {
        assigned_to: "null",
        status__is_closed: false
      },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      const issues = map(response.data, issue => extend(issue, {type: "issue"}))
      this.setState({unassigned_issues: merge(this.state.unassigned_issues, issues)})
    })

    restClient(GET_LIST, 'tasks', {
      filter: {
        assigned_to: user_id,
        status__is_closed: false
      },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      const tasks = map(response.data, task => extend(task, {type: "task"}))
      this.setState({tasks: merge(this.state.tasks, tasks)})
    })

  }

  render(){
    const { projects, issues, tasks,  unassigned_issues } = this.state;

    return (
      <div style={{display: "flex"}}>
        <MyProjects projects={projects} />
        <Issues issues={issues} title="fg.assigned_issues" color="#4e9a06"/>
        <Tasks tasks={tasks} title="fg.assigned_tasks" color="#e4d836"/>
        <Issues issues={unassigned_issues} title="fg.unassigned_issues_tasks" />
      </div>
  );
  }
}

export default withWidth()(Dashboard);
