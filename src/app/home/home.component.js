import React from 'react';

import logo from '../../assets/logo.svg';

class HomeComponent extends React.Component {

	render() {
		return (
			<img src={logo} className="logo" alt="logo" />
		);
	}
}

export default HomeComponent;
