import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SwitchListSecondary() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['lights', 'light1', 'light2', 'light3', 'light4']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List subheader={<ListSubheader>Lights
            <Switch
                edge="end"
                onChange={handleToggle('lights')}
                checked={checked.indexOf('lights') !== -1}
                inputProps={{ 'aria-labelledby': 'switch-list-label-lights' }}
            />
        </ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-light1" primary="Lamp1" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('light1')}
                        checked={checked.indexOf('light1') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-light1' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-light2" primary="Lamp2" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('light2')}
                        checked={checked.indexOf('light2') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-light2' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-light3" primary="Lamp3" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('light3')}
                        checked={checked.indexOf('light3') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-light3' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-light4" primary="Lamp4" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('light4')}
                        checked={checked.indexOf('light4') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-light4' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
