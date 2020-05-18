import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SwitchListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['security']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
            alert("Security ON")
        } else {
            newChecked.splice(currentIndex, 1);
            alert("Security OFF")
        }

        setChecked(newChecked);
    };

    return (
        <List subheader={<ListSubheader>Security</ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <LockIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-security" primary="Security" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('security')}
                        checked={checked.indexOf('security') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-security' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>

        </List>
    );
}
