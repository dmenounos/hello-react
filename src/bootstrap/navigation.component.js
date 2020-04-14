import React from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Top level container.
 */
export class NavBar extends React.Component {
	render() {
		const { children } = this.props;

		const expandOptions = {
			sm: "sm",
			md: "md",
			lg: "lg",
			xl: "xl"
		};

		const themeOptions = {
			dark: "dark",
			light: "light"
		};

		const expand = expandOptions[this.props.expand] || "sm";
		const theme = themeOptions[this.props.theme] || "light";

		let className = "navbar";
		className += " navbar-expand-" + expand;
		className += " navbar-" + theme + " bg-" + theme;

		return <nav className={className}>{children}</nav>;
	}
}

NavBar.propTypes = {
	expand: PropTypes.string,
	theme: PropTypes.theme,
	children: PropTypes.any
};

/**
 * 1st level menu container.
 */
export class NavMenu extends React.Component {

	render() {
		const { id, children } = this.props;

		return (
			<div>
				{/* responsive toggle */}
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target={'#'+id} aria-controls={id} aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				{/* actual menu */}
				<div className='collapse navbar-collapse' id={id}>
					<ul className='navbar-nav mr-auto'>
						{children}
					</ul>
				</div>
			</div>
		);
	}
}

NavMenu.propTypes = {
	id: PropTypes.string,
	children: PropTypes.any
};

/**
 * 1st level link component.
 */
export function NavLink(props) {

	const { to, label, exact } = props;

	return (
		<Route path={to} exact={exact} children={({ match }) => (
			<li className={match ? 'nav-item active' : 'nav-item'}>
				<Link to={to} className='nav-link'>{label}</Link>
			</li>
		)} />
	);
}

NavLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string,
	exact: PropTypes.bool
};

/**
 * 2nd level menu container.
 */
export class DropDownNavMenu extends React.Component {

	render() {
		const { to, label, exact, children } = this.props;

		return (
			<Route path={to} exact={exact} children={({ match }) => (
				<li className={match ? 'nav-item dropdown active' : 'nav-item dropdown'}>
					<a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
						{label}
					</a>
					<div className='dropdown-menu'>
						{children}
					</div>
				</li>
			)} />
		);
	}
}

DropDownNavMenu.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string,
	exact: PropTypes.bool,
	children: PropTypes.any
};

/**
 * 2nd level link component.
 */
export function DropDownNavLink(props) {

	const { to, label } = props;

	return (
		<Link to={to} className='dropdown-item'>{label}</Link>
	);
}

DropDownNavLink.propTypes = {
	to: PropTypes.string,
	label: PropTypes.string
};
