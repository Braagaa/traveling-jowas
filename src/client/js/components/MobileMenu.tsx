import React from 'react';
import Item from './MobileMenuItem';

import PATHS from '../data/paths';

interface Props {
	isActive: boolean;
}

const MobileMenu = function({isActive}: Props) {
	const activeCSS = isActive ? 'mobile-nav mobile-nav-active' : 'mobile-nav';

	return (
		<div className={activeCSS}>
			<div className="mobile-nav-inner">
				<ul className="mobile-nav-list">
					{
						PATHS.map(([text, link]) => <Item
							key={text}
							text={text}
							link={link}
						/>)
					}
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
