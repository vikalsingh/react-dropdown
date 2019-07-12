import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route} from 'react-router';
import './index.css';
// import App from './App';
import App from './component/App';
import About from './component/About';
import Repos from './component/Repos';
import * as serviceWorker from './serviceWorker';

render( 
	
		<Router>
			<Route path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/repos" component={Repos} />
		</Router>
		)
	
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
