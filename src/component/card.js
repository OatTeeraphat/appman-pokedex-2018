import React, { Component } from 'react'

const Card = (props) => (

	<div className='card'>
		<div className='card_container'>
			<div className='card_img'>
				<img src={ props.data.imageUrl } alt='poke'/>
			</div>
			<div className='card_desc'>
				<h1>{props.data.name}</h1>
				<Progress name="HP" value={props.data.hp}/>
				<Progress name="STR" value="80"/>
				<Progress name="WEAK" value="100"/>
				<img src={require('../cute.png')} alt='poke' />
				<img src={require('../cute.png')} alt='poke' />
			</div>
		</div>
	</div>

)

const Progress = (props) => (

	<div className="card_progress">
		<div className="card_progress_desc">
			{props.name}
		</div>
		<div className="card_progress_bar">
			<div className="card_progress_percent" style={{ width: props.value + '%' }}></div>
		</div>
	</div>
)

export default Card;