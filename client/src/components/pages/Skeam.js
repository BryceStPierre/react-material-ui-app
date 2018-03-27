import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';

import blue from 'material-ui/colors/blue';

import formatDate from '../../utils/formatDate';

// FaStarHalfEmpty
// react-icons/lib/fa/star-half-empty
// FaStarHalf
// react-icons/lib/fa/star-half
// FaStarO
// react-icons/lib/fa/star-o
// FaStar
// react-icons/lib/fa/star

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  icons: {
    flexGrow: 8,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
  }
});

class Skeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      meta: {},
      structure: {},
      notFound: false
    };
  }

  componentDidMount () {
    const { id } = this.state;

    fetch(`/api/skeam/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then((meta) => {
        if (meta) {
          this.props.onPageTitleChange(`'${meta.title}'`);
          this.setState({ meta });
        }
        console.log(meta);
      });
  }

  render() {
    const { classes } = this.props;
    const { meta } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.row}>
                <Avatar className={classes.orangeAvatar}>U</Avatar>
                <div className={classes.column}>
                  <Typography variant='subheading'>Username</Typography>
                  <Typography>Edited {formatDate(meta.edited)}</Typography>
                </div>
                <div className={classes.icons}>
                  <IconButton color="secondary" className={classes.button} aria-label="Like">
                    <ThumbUpIcon />
                  </IconButton>
                  <IconButton color="secondary" className={classes.button} aria-label="Dislike">
                    <ThumbDownIcon />
                  </IconButton>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant='headline'>{meta.title}</Typography>
              <Typography gutterBottom>{meta.description}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Skeam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Skeam);
