import React from 'react';
import { Link } from 'react-router-dom';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DescriptionIcon from 'material-ui-icons/Description';

import logo from '../images/logo.svg';

const styles = {
  logo: { 
    maxHeight: 55, 
    margin: '0 auto'
  }
};

export default function DrawerItems (props) {
  return (
    <div>
      <List>
        <ListItem component={Link} to="/">
          <img src={logo} alt="Logo" style={styles.logo} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/get-started">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Get Started" />
        </ListItem>
        <ListItem button component={Link} to="/explore">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button component={Link} to="/vision">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Vision" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/help">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button component={Link} to="/terms">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Terms of Use" />
        </ListItem>
        <ListItem button component={Link} to="/privacy">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>
    </div>
  );
}
