import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import About from './About';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Welcome to Home page</h1>
				<About />
				<ul role="nav">
					<li><Link to="/about">About</Link></li>
					<li><Link to="/repos">Repos</Link></li>
				</ul>
			</div>
			)
	}
}