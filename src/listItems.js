import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const linkStyle = makeStyles({
  links: {
    color: 'black',
    textDecoration: 'none'
  }
});

export function MainListItems() {
  const classes = linkStyle();
  return (
    <div>
      <Link to='/' className={classes.links}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to='/devices' className={classes.links}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
      </Link>
      <Link to='/rooms' className={classes.links}>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Rooms" />
        </ListItem>
      </Link>
    </div>
  )
};
