import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  
});

class SkeamAttribute extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  };
  
  render() {
    // const { classes } = this.props;

    return (
      <div>
        
      </div>
    );
  }
}

SkeamAttribute.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkeamAttribute);