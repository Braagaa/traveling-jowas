import React from 'react';
import {Path} from '../data/paths';

interface Props {
	links: Path[];
}

const Dropdown = function({links}: Props) {
	return (
		<div className="dropdown">
			<ul className="dropdown-list">
				{
					links.map(({text, link}: Path) => (
						<li key={text}>
							<a href={link}>{text}</a>
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Dropdown;
