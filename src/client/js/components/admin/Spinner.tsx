import React from 'react';

const Spinner = function() {
	return (
		<div className="text-center">
			<div className="spinner-border text-purple" role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
