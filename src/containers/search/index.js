import React, { Component } from 'react'
import { Card } from "../../component";

class PokeSearch extends Component {

	state = {
		pokeData: [],
	}

	componentDidMount() {
		this.handleSearch()
	}

	handleSearch = () => {
		let url = 'http://localhost:3030/api/cards?limit=10';
		fetch(url).
			then(response => response.json()).then((repos) => {
				console.log(repos);
				console.log(repos.length);
				this.setState({
					pokeData: repos.cards
				})
			});
	};

	handleWeakNessValue = (value) => {
		if (value !== undefined || value !== null) {
			return value
		} else {
			return 0
		}
	}

	render() {
		return (
			<div className="container">
				{
					this.state.pokeData.map((data) => {
						console.log(data.attacks);

						let data_ = {
							imageUrl: data.imageUrl,
							name: data.name,
							hp: data.hp,
							str: 100,
							weak: 100,
							happi : 3,
						}

						return (
							<Card data={data_} />
						)
					})
				}
			</div>
		)
	}
}

export default PokeSearch;