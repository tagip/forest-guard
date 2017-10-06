import React, { Component } from 'react';
import { GET_LIST } from 'admin-on-rest';
import withWidth from 'material-ui/utils/withWidth';
import { map, extend, concat } from 'lodash';
import { restClient } from './RestClient';
import MyProjects from './components/MyProjects';
import ItemList from './components/ItemList';

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

    restClient(GET_LIST, 'tasks', {
      filter: {
        assigned_to: user_id,
        status__is_closed: false
      },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      const tasks = map(response.data, task => extend(task, {type: "task"}))
      this.setState({tasks: concat(this.state.tasks, tasks)})
    })

    restClient(GET_LIST, 'tasks', {
      filter: {
        assigned_to: "null",
        status__is_closed: false
      },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      const tasks = map(response.data, issue => extend(issue, {type: "task"}))
      this.setState({unassigned_issues: concat(this.state.unassigned_issues, tasks)})
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
      this.setState({issues: concat(this.state.issues, issues)})
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
      this.setState({unassigned_issues: concat(this.state.unassigned_issues, issues)})
    })

  }

  render(){
    const { projects, issues, tasks,  unassigned_issues } = this.state;

    return (
      <div style={{display: "flex"}}>
        <MyProjects projects={projects} />
        <ItemList items={issues} title="fg.assigned_issues" color="#4e9a06" type="issue"/>
        <ItemList items={tasks} title="fg.assigned_tasks" color="#e4d836" type="task"/>
        <ItemList items={unassigned_issues} title="fg.unassigned_issues_tasks" type="all"/>
      </div>
  );
  }
}

export default withWidth()(Dashboard);
