import React from 'react';
import { makeStyles, Container, Grid, Paper, Card } from '@material-ui/core';
import clsx from 'clsx';
import SecuritySwitch from '../switchesComponents/SecuritySwitch'
import LightsSwitches from '../switchesComponents/LightsSwitches'
import RecentDevices from '../devicesComponents/RecentDevices';
import DevicesSwitches from '../devicesComponents/DevicesSwitches'
// import MusicCard from './MusicCard'

const drawerWidth = 240
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

export function DashboardContent() {
	const classes = useStyles();
	// eslint-disable-next-line no-undef
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<main className={classes.content}>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Card>
							<DevicesSwitches />
						</Card>
					</Grid>
					{/* SecuritySwitch */}
					<Grid item xs={4}>
						<Card>
							<SecuritySwitch />
						</Card>
					</Grid>
					{/* LightsSwitches */}
					<Grid item xs={4}>
						<Card>
							<LightsSwitches />
						</Card>
					</Grid>
					{/* <Grid item xs={12}>
						<Paper className={classes.paper}>
							<RecentDevices />
						</Paper>
					</Grid> */}
					{/* <Grid item xs={4}>
						<Card>
							<MusicCard />
						</Card>
					</Grid> */}
				</Grid>
			</Container>
		</main>
	);
}
