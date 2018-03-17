import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

import Grow from 'material-ui/transitions/Grow';

import sample from './images/sample.png';
const tileData = [
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample },
  { title: 'Sample', author: 'Author', img: sample }
];

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    textAlign: 'left'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Explore extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      search: '',
      loading: false
    };
  }
  
  onChange = (e) => {
    this.setState({ search: e.target.value });
  }

  onClear = (e) => {
    this.textField.focus();
    this.setState({ search: '' });
  }

  render() {
    const { classes } = this.props;
    const { search, loading } = this.state;

    return (
      <div className={classes.root}>
        <TextField
          type='text'
          name='search'
          label='Search'
          value={search}
          onChange={this.onChange}
          inputRef={input => { this.textField = input; }}
          margin='normal'
          fullWidth
          autoFocus
        />
        <Button
          color='default'
          variant='raised'
          onClick={this.onClear}
        >
          Clear
        </Button>

        <div className={classes.container}>
          <GridList 
            className={classes.gridList} 
            cellHeight={180}
            cols={3}
          >
            <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
              <Typography variant="title">
                Results
              </Typography>
            </GridListTile>

            {tileData.map((tile, i) => (
              <Grow timeout={{ enter: i * 500, exit: i * 500 + 500 }}  in>
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              </Grow>
            ))}
          </GridList>
        </div>
        { loading && <CircularProgress 
          className={classes.progress}
          color='primary'
          size={75} />
        }
      </div>
    );
  }
}

Explore.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Explore);