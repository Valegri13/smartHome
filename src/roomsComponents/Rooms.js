import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

// Generate Order Data
// function createData(id, name, category, status) {
//     return { id, name, category, status };
// }

// const rows = [
//     createData(0, 'Door', 'Lock', 'active'),
//     createData(1, 'Window', 'Lock', 'active'),
//     createData(2, 'Lamp', 'Light', 'disabled'),
// ];


// const rows1 = [
//     createData(0, 'Door', 'Lock', 'active'),
//     createData(1, 'Window', 'Lock', 'active'),
//     createData(2, '213421', 'Lock', 'disabled'),
// ];

// function preventDefault(event) {
//     event.preventDefault();
// }

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Rooms(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Table size="small">
                <TableHead align="right">
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell><Switch></Switch></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell><Switch></Switch></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
