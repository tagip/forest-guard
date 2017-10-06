import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Icon from 'material-ui/svg-icons/action/list';
import { pink400 } from 'material-ui/styles/colors';
import { translate } from 'admin-on-rest';

const styles = {
    card: { borderLeft: 'solid 4px', borderLeftColor: pink400, flex: '1', marginBottom: '1em' },
    icon: { float: 'right', width: 64, height: 64, padding: 16, color: pink400 },
};

export default translate(({ value, translate }) => (
    <Card style={styles.card}>
        <Icon style={styles.icon} />
        <CardTitle title={value} subtitle={translate('fg.my_projects')} />
    </Card>
));
