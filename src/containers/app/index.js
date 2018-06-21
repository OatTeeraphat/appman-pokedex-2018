import React, { Component } from 'react'
import Pokedex from '../dex';
import PokeList from '../list';
import PokeSearch from '../search';
import '../../style/App.css'

class App extends Component {

  state = {
    modalsIsOpen : false,
  }

  handleModal = () => {
    this.setState(prevState => ({
      modalsIsOpen: !prevState.modalsIsOpen
    }));
  }

  render() {
    return (
      <div>
          <Pokedex handleModal={ this.handleModal } />
          {/* <PokeList /> */}
          {
            this.state.modalsIsOpen === true
              ? <PokeSearch />
              : null
          }
      </div>
    )
  }
}

export default App
