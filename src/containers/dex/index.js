import React, { Component } from 'react'

class Pokedex extends Component {

	render() {
		return (
			<div>
				<header>
					My Pokedex
				</header>
				<footer>
					<button onClick={() => this.props.handleModal() }>+</button>
				</footer>
			</div>
		)
	}
}

export default Pokedex;