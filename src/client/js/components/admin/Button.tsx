import React from 'react';

export enum ButtonTypes {
	Primary,
	Secondary,
	Small
}

interface Props {
	type?: "button" | "submit";
	className?: string;
	disabled?: boolean;
	outlined?: boolean;
	button?: ButtonTypes;
	onClick?: () => void;
}

const findButtonType = (num: ButtonTypes) => 
	num === ButtonTypes.Primary ? " purple" :
	num === ButtonTypes.Secondary ? " btn-outline-purple" :
	num === ButtonTypes.Small ? " btn-danger btn-sm" : " purple";

const Button: React.FC<Props> = function({
	className = "", 
	button = ButtonTypes.Primary,
	disabled = false, 
	type = "button", 
	onClick,
	children
}) {
	let mainClass = "btn";
	mainClass += findButtonType(button);
	if (className) {
		mainClass += " " + className;
	};

	return (
		<button onClick={onClick} className={mainClass} type={type} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
