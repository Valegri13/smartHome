import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
const categories = [
    {
        value: 'Lock',
        label: 'Lock',
    },
    {
        value: 'Light',
        label: 'Light',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="device-name" label="Name" variant="outlined" />
                <TextField
                    id="select-category"
                    select
                    label="Category"
                    value={category}
                    onChange={handleChange}
                    helperText="Please select your category"
                    variant="outlined"
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" color="primary">Add device</Button>
            </div>
        </form>
    );
}
