import React from 'react';
import { Link } from 'react-router-dom';

import bar from '../../assets/bar.png';

import './bar.component.scss';

function BarComponent() {
	return (
		<div className="BarComponent">
			<img src={bar} alt="bar" />
			<h2> Hi I am Bar!</h2>
			<Link to="/foo">Say Hello to Foo</Link>
		</div>
	);
}

export default BarComponent;
