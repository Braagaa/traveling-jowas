import React from 'react';

interface Props {
	text: string;
	link: string;
}

const Item = function({text, link}: Props) {
	return (
		<li className="mobile-nav-item">
			<a className="mobile-nav-link" href={link}>{text}</a>
		</li>
	);
};

export default Item;
