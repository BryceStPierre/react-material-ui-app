import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import thinker from './images/thinker.jpeg';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  image: {
    width: '60%',
    margin: theme.spacing.unit * 2
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography 
          variant='title'
          gutterBottom
        >
          A collaborative and open platform for ideas, and more.
        </Typography>
        <img 
          className={classes.image} 
          src={thinker} 
          alt='Thinker' 
        />
        <Button
          className={classes.fab}
          variant='fab'
          color='primary'
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);