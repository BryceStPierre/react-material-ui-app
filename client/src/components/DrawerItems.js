import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DescriptionIcon from 'material-ui-icons/Description';

export default function DrawerItems (props) {
  return (
    <div>
      {/*<div className={classes.toolbar} />*/}
      <List>
        <ListItem component={Link} to="/" onClick={() => { props.onDrawerItemClick('Home'); }}>
          <img src={logo} alt="logo" style={{ maxHeight: 55, margin: '0 auto' }} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Page 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Page 2"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Page 3"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Vision" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Terms of Use" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>
    </div>
  );
}
