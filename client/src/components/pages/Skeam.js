import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  
});

class Skeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id
    };
  }

  componentDidMount () {
    
  }

  render() {
    const { classes } = this.props;
    const { id } = this.state;

    return (
      <div>
        Skeam ID: {id}
      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
