import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography} from '@material-ui/core';
import Title from '../Title';
import Switch from '@material-ui/core/Switch';
import {useSelector, useDispatch} from 'react-redux';
import { addDevices, changeStatus } from '../Actions/DevicesActions';

export default function Devices(props) {
    const devices = useSelector(state => state.devices);
    const devicesCatagory = useSelector(state => state.devicesCategory);
    const roomCategorys = useSelector(state => state.roomCategorys);
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3000/userDevices');
        socket.onmessage = (e) => {
            dispatch(addDevices(JSON.parse(e.data)));
            console.log(JSON.parse(e.data));
        }
    }, [])
    const changeSomeStatus = id => {
        dispatch(changeStatus(id));
    }
    return (
        <React.Fragment>
            <Title>
                <Typography variant='h5' align='left'>Devices List
                </Typography>
            </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Room</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {devices.map((device) => (
                        <TableRow key={device.id}>
                            <TableCell>{device.name}</TableCell>
                            <TableCell>{devicesCatagory
                                    .find(item => item.id === device.deviceID)
                                    .name}</TableCell>
                            <TableCell>{roomCategorys
                                    .find(item => item.id === device.roomID)
                                    .name}</TableCell>
                            <TableCell>{device.status}</TableCell>
                            <TableCell>
                                <Switch checked={device.status == 'active' ? true : false} onChange={() => {changeSomeStatus(device.id)}}></Switch>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
