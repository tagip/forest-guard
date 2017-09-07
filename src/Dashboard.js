import React from 'react';
import { Card, CardHeader, CardText, CardTitle } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default () => (
    <div>
      <Card style={{ margin: '2em' }}>
          <CardTitle title="My projects" />
          <CardText>Lorem ipsum sic dolor amet...</CardText>
      </Card>
    </div>
);
