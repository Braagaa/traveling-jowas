import React, {Dispatch, SetStateAction} from 'react';

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = function({isActive, setIsActive}: Props) {
	const onClick = () => {
		setIsActive(!isActive);
	};

	const activeCSS = !isActive ? 'hamburger' : 'hamburger hamburger-active';

	return (
		<div onClick={onClick} className={`${activeCSS}`}>
			<div className="hamburger-box">
				<div className="hamburger-inner"></div>
			</div>
		</div>
	);	
}

export default Hamburger;
