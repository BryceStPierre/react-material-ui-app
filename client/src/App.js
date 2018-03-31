import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from 'material-ui-icons/Menu';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import Routes from './components/Routes';
import DrawerItems from './components/DrawerItems';

import titleMap from './utils/titleMap';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  flex: {
    flex: 1
  },
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    }
  },
  menuButton: {
    marginRight: 20
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
});

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      page: null,
      user: null,
      signedIn: false,
      mobileOpen: false,
      menuAnchor: null
    };
  }

  componentWillMount () {
    this.handlePageChange(this.props.location.pathname);

    fetch('/api/signin', { credentials: 'include' })
    .then(res => res.json())
    .then((user) => {
      this.setState({ 
        user: user, 
        signedIn: user ? true : false 
      });
    });
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location)
      this.handlePageChange(this.props.location.pathname);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleSignOut = () => {
    fetch('/api/signin', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(res => {
      this.setSignedIn(false, null);
    });
  };

  handleMenuClick = (e) => {
    this.setState({ menuAnchor: e.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuAnchor: null });
  };

  setSignedIn = (signedIn, user) => {
    this.setState({ signedIn, user });
    console.log(user);
  };

  handlePageChange = (path) => {
    const page = titleMap(path);
    this.handlePageTitleChange(page);
  };

  handlePageTitleChange = (page) => {
    this.setState({ page });
  };
  
  render() {
    const { classes, theme } = this.props;
    const { page, signedIn, user, menuAnchor } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classNames(classes.navIconHide, classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>{page}</Typography>
            { !signedIn && <Button color="inherit" component={Link} to="/sign-in">Sign In</Button> }
            { signedIn && 
              <div>
                <Button color='inherit' onClick={this.handleMenuClick}>
                  {user.display_name}
                  <ExpandMoreIcon />
                </Button>
                <Menu
                  id='menu'
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={this.handleMenuClose}
                >
                  <MenuItem component={Link} to='/profile'>Profile</MenuItem>
                  <MenuItem component={Link} to='/profile'>Settings</MenuItem>
                  <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </div>
            }
            { /*signedIn && <Button color="inherit" >Sign Out</Button>*/ }
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerItems />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            open
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
          >
            <DrawerItems />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes onSignIn={this.setSignedIn} onPageTitleChange={this.handlePageTitleChange}/>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);