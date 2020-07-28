import React from 'react';
import Item from './MobileMenuItem';
import {activeClass} from '../util/fn';

import PATHS from '../data/paths';

interface Props {
	isActive: boolean;
}

const MobileMenu = function({isActive}: Props) {
	const activeCSS = activeClass(isActive, 'mobile-nav');

	return (
		<div className={activeCSS}>
			<div className="mobile-nav-inner">
				<ul className="mobile-nav-list">
					{
						PATHS.map(({text, link, links}) => <Item
							key={text}
							text={text}
							link={link}
							links={links}
							isOpen={isActive}
						/>)
					}
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
