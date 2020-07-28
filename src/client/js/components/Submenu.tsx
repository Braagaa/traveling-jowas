import React from 'react';
import {Path} from '../data/paths';
import {activeClass} from '../util/fn';

interface Props {
	isActive: boolean;
	links: Path[];
}

const Submenu = function({links, isActive}: Props) {
	const className = activeClass(
		isActive && links.length > 0, 
		"mobile-nav-submenu"
	);

	return (
		<ul className={className}>
			{
				links.map(({text, link}: Path) => (
					<li key={text}>
						<a className="mobile-nav-link" href={link}>
							{text}
						</a>
					</li>
				))
			}
		</ul>
	);
};

export default Submenu;
