import React from 'react';

import PATHS from '../data/paths';

const createItem = function([text, path]: string[]) {
	return (
		<li>
			<a href={path}>{text}</a>
		</li>
	);
}

const Nav = function() {
	return (
		<nav className="nav">
			<ul>
				{
					PATHS.map(createItem)
				}
			</ul>
		</nav>
	);
}

export default Nav;
