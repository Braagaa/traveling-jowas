import React from 'react';

interface Props {
	errors: Error[];
}

const formatError = ({message}: Error) => {
	if (message.includes('E11000') && message.includes('duplicate key')) {
		const reg = /{ (.+): "(.+)" }/g.exec(message);
		const [,key,value] = reg!;
		return `${value.toUpperCase()} already exists for ${key.toUpperCase()}.`;
	}

	return message;
};

const ErrorList = function({errors}: Props) {
	return (
		<div className="alert alert-danger fade show" role="alert">
			<strong>Errors:</strong>
			<ul>
				{
					errors
						.map(formatError)
						.map((text, i) => <li key={i}>{text}</li>)
				}
			</ul>
		</div>
	);
};

export default ErrorList;
