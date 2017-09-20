import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { translate } from 'admin-on-rest';
import { BASE_URL } from './consts';
import CountPending from './CountPending';

const style = { flex: 2, margin: '0 0 0 2em' };

export default translate(({ issues = [], title, color, translate }) => (
    <div style={style}>
      <CountPending value={issues.length} title={title} color={color} />
      <Card>
          <List>
              {issues.map(function(record) {
                const link = typeof record.project_extra_info !== 'undefined' ? `${BASE_URL}/project/${record.project_extra_info.slug}/${record.type}/${record.ref}` : '#';
                return (<ListItem
                      key={record.id}
                      href={link}
                      target="blank"
                      primaryText={record.subject}
                      secondaryText=""
                      leftAvatar={<Avatar backgroundColor={color || "#31708f"}>{record.project_extra_info.name.charAt(0)}</Avatar>}
                  />
              )})}
          </List>
      </Card>
    </div>
));
