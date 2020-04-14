import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomeComponent from './home/home.component';
import FooComponent from './foo/foo.component';
import BarComponent from './bar/bar.component';

import './app.component.css';

class AppComponent extends React.Component {

	render() {
		return (
			<Router>
				<nav className="main-menu">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/foo">Foo</Link></li>
						<li><Link to="/bar">Bar</Link></li>
					</ul>
				</nav>
				<div className="main-content">
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route path="/foo" component={FooComponent} />
						<Route path="/bar" component={BarComponent} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default AppComponent;
