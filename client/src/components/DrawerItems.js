import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import DescriptionIcon from 'material-ui-icons/Description';

import logo from '../images/logo.svg';

const styles = theme => ({
  logo: { 
    height: 50, 
    margin: '0 auto'
  }
});

const DrawerItems = (props) => {
  return (
    <div>
      <List>
        <ListItem component={Link} to="/">
          <img 
            className={props.classes.logo} 
            src={logo} 
            alt="Logo" 
          />
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
        <ListItem button component={Link} to="/terms-of-use">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Terms of Use" />
        </ListItem>
        <ListItem button component={Link} to="/privacy-policy">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography align='center'>
            Developed by Bryce St. Pierre
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}

DrawerItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DrawerItems);