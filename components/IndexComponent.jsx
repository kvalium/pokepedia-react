/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function IndexComponent({ classes, searchPokemon, results }) {
  return (
    <div className={classes.root}>
      <Typography>Pokedex</Typography>
      <TextField
        id="outlined-name"
        label="Search a Pokemon"
        className={classes.textField}
        onChange={e => searchPokemon(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <pre>{JSON.stringify(results, 0, 2)}</pre>
    </div>
  );
}

IndexComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  searchPokemon: PropTypes.func.isRequired,
  results: PropTypes.object,
};

export default withStyles(styles)(IndexComponent);
