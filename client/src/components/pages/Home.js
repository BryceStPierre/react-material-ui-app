import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from 'material-ui-icons/Add';
import Modal from 'material-ui/Modal';

import thinker from '../../images/thinker.jpeg';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  image: {
    width: '60%',
    margin: theme.spacing.unit * 2
  },
  button: {
    marginTop: theme.spacing.unit
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  }, 
  paper: {
    position: 'absolute',
    padding: 32,
    width: 340,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      modalOpen: false
    };
  }
  
  getModalStyle = () => {
    return {
      top: `${(window.innerHeight - 208) / 2}px`,
      left: `${(window.innerWidth - 340 - 64) / 2}px`
    };
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography 
          variant='title'
          gutterBottom
        >
          A collaborative and open platform for ideas and more.
        </Typography>
        <img 
          className={classes.image} 
          src={thinker} 
          alt='Thinker' 
        />
        <Tooltip title='Create' placement='left'>
          <Button
            className={classes.fab}
            variant='fab'
            color='primary'
            onClick={this.handleModalOpen}
          >
            <AddIcon />
          </Button>
        </Tooltip>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
        >
          <div style={this.getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Create
            </Typography>
            <Typography variant="subheading" id="modal-description">
              What will it be?
            </Typography>
            <Button
              component={Link}
              to='/create/skeam'
              className={classes.button}
              variant='raised'
              color='primary'
              size='large'
              fullWidth
            >
              New Skeam
            </Button>
            <br />
            <Button
              component={Link}
              to='/create/template'
              className={classes.button}
              variant='raised'
              color='secondary'
              size='large'
              fullWidth
            >
              New Template
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);