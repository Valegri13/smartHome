import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { addDevice } from '../Actions/DevicesActions';

const socket = new WebSocket('ws://localhost:3000/userDevices');

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const devicesCatagory = useSelector(state => state.devicesCategory);
    const roomCategorys = useSelector(state => state.roomCategorys);
    const [category, setCategory] = React.useState({});
    const [room, setRoom] = React.useState({});
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeRoom = event => {
        setRoom(event.target.value);
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleNameChange = event => {
        setName(event.target.value);
    }
    const addDeviceInStore = useCallback(() => {
        socket.send(JSON.stringify({
            type: 'addUserDevice',
            name: name,
            deviceID: category.id,
            roomID: room.id,
            deviceCategoryID: category.deviceCatagoryID
        }))
        // dispatch(addDevice({
        //     name: name,
        //     deviceID: category.id,
        //     roomID: room.id,
        //     deviceCategoryID: category.deviceCatagoryID,
        //     status: 'disabled'
        // }))
        setOpen(false);
    }, [])

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add device
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add device</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        value={name}
                        onChange={handleNameChange}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="select-category"
                        select
                        label="Category"
                        value={category}
                        onChange={handleChangeCategory}
                        helperText="Please select your category"
                        variant="outlined"
                        fullWidth
                    >
                        {devicesCatagory.map(cat => (
                            <MenuItem key={cat.id} value={cat.id}>{
                                cat.name
                        }</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="dense"
                        id="select-Room"
                        select
                        label="Room"
                        value={room}
                        onChange={handleChangeRoom}
                        helperText="Please select your category"
                        variant="outlined"
                        fullWidth
                    >
                        {roomCategorys.map(cat => (
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.name}
                            </MenuItem>
                        ))}
                    </TextField>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Cancel
                     </Button>
                    <Button onClick={() => {
                        addDeviceInStore();
                    }} color="primary" variant="contained">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
