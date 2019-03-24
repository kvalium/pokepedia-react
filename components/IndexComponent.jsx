import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  container: {
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '20px',
    padding: 20,
  },
  element: {
    display: 'block',
    background: 'lightgray',
    padding: 20,
    borderRadius: 5,
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
      <div className={classes.container}>
        {results.map(pokemon => (
          <Link prefetch href={`/pokemon?id=${pokemon.id}`} as={`/pokemon/${pokemon.name}`}>
            <div className={classes.element}>
              <Typography variant="h4">{pokemon.name}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

IndexComponent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  searchPokemon: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

IndexComponent.defaultProps = {
  results: [],
};

export default withStyles(styles)(IndexComponent);
