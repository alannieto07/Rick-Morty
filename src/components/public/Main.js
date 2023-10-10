import React, { Component } from 'react'
import { Cards } from './Cards' 
import RickAndMortyService from '../../services/RickAndMorty.service';

export class Main extends Component {
constructor(props){
  super(props);
  this.state = { personajes: []};
}

componentDidMount(){
  RickAndMortyService.getAllCharacters()
  .then((data) => this.setState({ personajes: data.results}))
  .catch((error) => console.log(error));
}


  render() {
    return (
      <div >
        <Cards personajes={this.state.personajes}/>
      </div>
    )
  }
}

export default Main
