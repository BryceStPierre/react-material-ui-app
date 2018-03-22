import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import CreateSkeam from '../forms/CreateSkeam';

const styles = theme => ({

});

class Skeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      create: props.match.params.id === 'new'
    };
  }
  
  render() {
    const { classes } = this.props;
    const { create } = this.state;

    if (create)
      return <CreateSkeam />;

    return (
      <div>
        Skeam
      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
