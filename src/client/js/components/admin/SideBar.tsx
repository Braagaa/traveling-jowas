import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

type Noop = () => void;

interface Props {
	showNav: boolean;
	navHide: Noop;
}

const Item = function(text: string, navHide: Noop) {
	const {pathname} = useLocation();
	const to = `/admin/${text.toLowerCase()}`;
	const css = `nav-link font-weight-bold ${pathname.startsWith(to) ? 'active' : ''}`;

	return (
		<li className="nav-item" key={text}>
			<Link className={css} to={to} onClick={navHide}>{text}</Link>
		</li>
	);
}

const Sidebar = function({showNav, navHide}: Props) {
	const navCSS = `col-md-3 col-lg-2 d-md-block sidebar collapse ${showNav ? 'show': ''}`;

	return (
		<nav className={navCSS}>
			<ul className="nav flex-column">
				{
					['Destinations', 'Travel', 'Posts', 'Images']
						.map(text => Item(text, navHide))
				}
			</ul>
		</nav>
	);
};

export default Sidebar;
