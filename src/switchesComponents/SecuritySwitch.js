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
import ApartmentIcon from '@material-ui/icons/Apartment';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SwitchListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['security', 'kwindow', 'lrwindow', 'entrancedoor', 'garagedoor']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List subheader={<ListSubheader>Security
            <Switch
                edge="end" onChange={handleToggle('security')}
                checked={checked.indexOf('security') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-security' }} /></ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <ApartmentIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-kwindow" primary="Kitchen window" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('kwindow')}
                        checked={checked.indexOf('kwindow') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-kwindow' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ApartmentIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-lrwindow" primary="LivingRoom window" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('lrwindow')}
                        checked={checked.indexOf('lrwindow') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-lrwindow' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-entrancedoor" primary="Entrance door" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('entrancedoor')}
                        checked={checked.indexOf('entrancedoor') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-entrancedoor' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-garagedoor" primary="Garage door" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('garagedoor')}
                        checked={checked.indexOf('garagedoor') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-garagedoor' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
