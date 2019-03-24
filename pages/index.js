import React from 'react';
import IndexComponent from '../components/IndexComponent';
import { getAllPokemons } from '../utils/PokemonUtils';

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
    if (term.length < 2) return;
    this.setState({ results: this.state.pokemons.filter(p => p.name.includes(term)) });
  }

  render() {
    return this.state.loading ? <>Loading....</> : <IndexComponent results={this.state.results} searchPokemon={e => this.searchPokemon(e)} />;
  }
}

export default Index;
