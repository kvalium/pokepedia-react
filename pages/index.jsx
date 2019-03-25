import React from 'react';
import IndexComponent from '../components/IndexComponent';
import { getAllPokemons, fetchPokemons } from '../utils/PokemonUtils';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pokemons: [],
      results: [],
    };
  }

  // on mount, get Pokemons
  componentDidMount() {
    getAllPokemons().then(pokemons => this.setState({ pokemons, loading: false }));
  }

  /**
   * Filter pokemons list using given term
   * @param {String} term filter pokemons with this term
   */
  searchPokemon(term) {
    if (term.length < 2) return this.setState({ results: [] });
    const { pokemons } = this.state;
    return fetchPokemons(pokemons.filter(p => p.name.includes(term.toLowerCase())))
      .then(results => this.setState({ results }));
  }

  render() {
    const { loading, results } = this.state;
    return loading ? <>Loading....</> : (
      <IndexComponent results={results} searchPokemon={e => this.searchPokemon(e)} />
    );
  }
}

export default Index;
