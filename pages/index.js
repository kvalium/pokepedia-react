/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import IndexComponent from "../components/IndexComponent";
import { getAllPokemons } from '../utils/PokemonUtils';

class Index extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      loading: true,
      pokemons: [],
      results: []
    }
  }

  // on mount, get Pokemons
  componentDidMount() {
    const pokemons = getAllPokemons().then(pokemons => this.setState({pokemons, loading: false}));
  }

  searchPokemon(term){
    this.setState({results: [term]});
  }

  render(){
    return this.state.loading ? <>Loading....</> : <IndexComponent results={this.state.results} pokemons={this.state.pokemons} searchPokemon={e => this.searchPokemon(e)} />
  }
}

export default Index;