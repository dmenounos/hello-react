import React from 'react';
import { Link } from 'react-router-dom';

import foo from '../../assets/foo.png';

import './foo.component.scss';

function FooComponent() {
	return (
		<div className="FooComponent">
			<img src={foo} alt="foo" />
			<h2>Hi I am Foo!</h2>
			<Link to="/bar">Say Hello to Bar</Link>
		</div>
	);
}

export default FooComponent;
