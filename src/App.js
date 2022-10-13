import React, { Component } from 'react'
import './App.css'
import { Display } from './components/Display'

class App extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<main className="container">
				<h3 className="text-center">CV Creator</h3>
				<div>
					<Display />
				</div>
			</main>
		)
	}
}

export default App
