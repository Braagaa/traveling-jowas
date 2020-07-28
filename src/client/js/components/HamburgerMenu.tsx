import React, {Dispatch, SetStateAction} from 'react';
import {activeClass} from '../util/fn';

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = function({isActive, setIsActive}: Props) {
	const onClick = () => {
		setIsActive(!isActive);
	};
	const activeCSS = activeClass(isActive, 'hamburger');

	return (
		<div onClick={onClick} className={`${activeCSS}`}>
			<div className="hamburger-box">
				<div className="hamburger-inner"></div>
			</div>
		</div>
	);	
}

export default Hamburger;
