import React, { Component } from 'react';
import { AppBarMobile, GET_LIST, GET_MANY } from 'admin-on-rest';
import withWidth from 'material-ui/utils/withWidth';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import { restClient } from './RestClient';
import MyProjects from './MyProjects';

class Dashboard extends Component {
  state = {};

  componentDidMount() {
    const user_id = localStorage.getItem('user_id');
    restClient(GET_LIST, 'projects', {
      filter: { member: user_id },
      pagination: { page: 1, perPage: 50 },
    })
    .then(response => {
      this.setState({projects: response.data})
    })
  }

  render(){
    const { projects } = this.state;

    return (
      <div>
        <MyProjects projects={projects} />
      </div>
  );
  }
}

export default withWidth()(Dashboard);
