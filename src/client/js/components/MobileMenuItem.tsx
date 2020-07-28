import React, {useState, useEffect, MouseEvent} from 'react';

import Submenu from './Submenu';
import {Path} from '../data/paths';

type Props = Path & {
	isOpen: boolean;
}

const Item = function({text, link, links, isOpen}: Props) {
	const [isActive, setIsActive] = useState(false);
	const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
		if (links.length > 0) {
			e.preventDefault();
			setIsActive(!isActive);
		}
	};
	const newText = links.length === 0 ? text :
		isActive ? text + ' -' :
		text + ' +';

	useEffect(() => {
		if (!isOpen) {
			setIsActive(false);
		};
	}, [isOpen]);

	return (
		<li className="mobile-nav-item">
			<a className="mobile-nav-link" href={link} onClick={onClick}>{newText}</a>
			{
				links.length > 0 ? (
					<Submenu
						isActive={isActive} 
						links={links}
					/>
				) : null
			}
		</li>
	);
};

export default Item;
