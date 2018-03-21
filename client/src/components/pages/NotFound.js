import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import errorImage from '../../images/404.png';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  error: {
    margin: theme.spacing.unit,
    width: 200
  }
});

class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img
          className={classes.error}
          src={errorImage} 
          alt='Error'
        />
        <Typography 
          variant='display3'
          gutterBottom
        >
          Oops!
        </Typography>
        <Typography 
          variant='subheading'
          gutterBottom
        >
          The page you requested could not be found.
        </Typography>
        <Button
          className={classes.button}
          variant='raised'
          color='primary'
          component={Link} 
          to='/'
        >
          Return Home
        </Button>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);