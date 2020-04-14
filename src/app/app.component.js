import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NavBar, NavMenu, NavLink, DropDownNavMenu, DropDownNavLink } from '../bootstrap/navigation.component';

import HomeComponent from './home/home.component';
import FooComponent from './foo/foo.component';
import BarComponent from './bar/bar.component';

import './app.component.css';

class AppComponent extends React.Component {

	render() {
		return (
			<Router>
				<NavBar theme='dark'>
					<header className='container'>
						<Link to='/' className='navbar-brand'>Home</Link>
						<NavMenu id='main-menu'>
							<NavLink to='/foo' label='Foo' />
							<NavLink to='/bar' label='Bar' />
							<DropDownNavMenu to='/more' label='More'>
								<DropDownNavLink to='/more/foo' label='Foo' />
								<DropDownNavLink to='/more/bar' label='Bar' />
							</DropDownNavMenu>
						</NavMenu>
					</header>
				</NavBar>
				<main className='container'>
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route path="/foo" component={FooComponent} />
						<Route path="/bar" component={BarComponent} />
						<Route path="/more/foo" component={FooComponent} />
						<Route path="/more/bar" component={BarComponent} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export default AppComponent;
