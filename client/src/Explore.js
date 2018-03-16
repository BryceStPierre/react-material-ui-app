import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

class Explore extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        
      </div>
    )
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Explore);