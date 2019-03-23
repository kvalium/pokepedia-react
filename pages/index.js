/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import IndexComponent from "../components/IndexComponent";

class Index extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      results: []
    }
  }

  searchPokemon(term){
    this.setState({results: [term]});
  }

  render(){
    return <IndexComponent results={this.state.results} searchPokemon={e => this.searchPokemon(e)} />
  }
}

export default Index;