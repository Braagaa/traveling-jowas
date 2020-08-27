import React from 'react';
import Spinner from '../components/admin/Spinner';

interface Props {
	loading: boolean;
}

const Loader: React.FC<Props> = function({loading, children}) {
	return loading ? (
		<Spinner/>
	) : (
		<React.Fragment>
			{children}
		</React.Fragment>
	);
};

export default Loader;
