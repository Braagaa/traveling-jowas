import React, {Dispatch, SetStateAction} from 'react';

interface Props {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadButton = function({setIsLoading, isLoading}: Props) {
	const onClick = () => {
		setIsLoading(!isLoading);
	}

	const buttonClass = 'button-main' + 
		(isLoading ? ' button-loading' : '');
	const text = isLoading ? 'Loading' : 'Load More';

	return (
		<button
			onClick={onClick} 
			className={buttonClass} 
			disabled={isLoading}
		>
			<span>{text}</span>
		</button>
	);
};

export default LoadButton;
