import React from 'react';

const Title: React.FC = function({children}) {
	return (
		<div className="py-4 text-center">
			<h1 className="py-4">{children}</h1>
		</div>
	);
};

export default Title;
