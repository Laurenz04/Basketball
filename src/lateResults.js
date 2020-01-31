import React from 'react'
// import './ResultsStyle.css'

const fakeData = {
  score1: '120',
  name1: 'Los Angeles Lakers',
  score2: '117',
  name2: 'Los Angeles Clippers'
}

export default class Results extends React.Component {
	render() {
		return (
			<div className="ResultsStyle">
				<h3>{fakeData.name1} {fakeData.score1}-{fakeData.score2} {fakeData.name2}</h3>
			</div>			
		)
	}
}