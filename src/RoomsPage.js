import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Rooms from './Rooms';
import Title from './Title';
import Button from '@material-ui/core/Button'
import Dialog from './AddDeviceButton'
import AddRoomButton from './AddRoomButton'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function RoomsPage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    function createData(id, name, category, status) {
        return { id, name, category, status };
    }

    const rows = [
        createData(0, 'Door', 'Lock', 'active'),
        createData(1, 'Window', 'Lock', 'active'),
        createData(2, 'Lamp', 'Light', 'disabled'),
    ];


    const rows1 = [
        createData(0, 'Door', 'Lock', 'active'),
        createData(1, 'Window', 'Lock', 'active'),
        createData(2, '213421', 'Lock', 'disabled'),
    ];

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <AddRoomButton />
                    </Grid>
                    {/* Devices */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container direction="row" justify="space-between">
                                <Title>
                                    <Typography variant='h5' align='left'>Living Room</Typography>
                                </Title>
                                <Dialog />
                            </Grid>
                            <Rooms rows={rows} />
                        </Paper>
                        <Paper className={classes.paper} style={{ marginTop: "2%" }}>
                            <Grid container direction="row" justify="space-between">
                                <Title>
                                    <Typography variant='h5' align='left'>Kitchen</Typography>
                                </Title>
                                <Dialog />
                            </Grid>
                            <Rooms rows={rows1} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}
