import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Icon from 'material-ui/svg-icons/content/inbox';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px', flex: '1', marginBottom: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16 },
};

export default translate(({ value, title, color, translate }) => (
    <Card style={{...styles.card, borderLeftColor: color || '#31708f'}}>
        <Icon style={{...styles.icon, color: color || '#31708f'}} />
        <CardTitle title={value} subtitle={translate(title)} />
    </Card>
));
