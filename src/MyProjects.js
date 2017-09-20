import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { translate } from 'admin-on-rest';
import { pink400 } from 'material-ui/styles/colors';
import { BASE_URL } from './consts';
import CountProjects from './CountProjects';

const style = { flex: 1 };

export default translate(({ projects = [], translate }) => (
    <div style={style}>
      <CountProjects value={projects.length} />
      <Card>
          <List>
              {projects.map(record =>
                  <ListItem
                      key={record.id}
                      href={`${BASE_URL}/project/${record.slug}`}
                      target="blank"
                      primaryText={record.name}
                      secondaryText={record.description}
                      leftAvatar={<Avatar backgroundColor={pink400}>{record.name.charAt(0)}</Avatar>}
                  />
              )}
          </List>
      </Card>
    </div>
));
