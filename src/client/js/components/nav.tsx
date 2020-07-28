import React from 'react';
import Dropdown from './Dropdown';

import PATHS, {Path} from '../data/paths';

const createItem = function({text, link, links}: Path) {
	return (
		<li key={`nav-${text}`}>
			<a href={link}>{text}</a>
			{
				links.length > 0 ? (
					<Dropdown links={links}/>
				) : null
			}
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
