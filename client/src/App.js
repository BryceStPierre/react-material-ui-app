import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';

import MenuIcon from 'material-ui-icons/Menu';

import Home from './Home';
import SignIn from './SignIn';
import NotFound from './NotFound';
import DrawerItems from './components/DrawerItems';

import pageTitle from './utils/pageTitle';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  flex: {
    flex: 1
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
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
    };
  }

  componentWillMount () {
    this.setPage(this.props.location.pathname);
    fetch('/api/signin')
      .then(res => res.json())
      .then((user) => {
        this.setState({ 
          user: user, 
          signedIn: user ? true : false 
        });
        console.log(this.state);
      });
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location)
      this.setPage(this.props.location.pathname);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  setSignedIn = (signedIn, user) => {
    console.log(signedIn, user);
    this.setState({ signedIn, user });
  }

  setPage = (path) => {
    const page = pageTitle(path);
    this.setState({ page });
  }
  
  render() {
    const { classes, theme } = this.props;
    const { page, signedIn } = this.state;

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
            { signedIn && <Button color="inherit">Sign Out</Button> }
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
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
            open
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
          >
            <DrawerItems />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route 
              path="/sign-in" 
              render={(routeProps) => (
                <SignIn {...routeProps} onSignIn={this.setSignedIn}/>
              )}
            />
            <Route component={NotFound} />
          </Switch>
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