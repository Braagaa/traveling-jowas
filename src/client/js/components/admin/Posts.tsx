import React from 'react';
import {useHistory} from 'react-router-dom';

import Title from './Title';
import Button, {ButtonTypes} from './Button';

const Posts = function() {
	const history = useHistory();

	const onCreate = () => {
		history.push('/admin/posts/create');
	};

	return (
		<div className="main mx-auto">
			<div className="d-flex align-items-center justify-content-around">
				<Title>Posts</Title>
				<Button onClick={onCreate}>Create</Button>
			</div>
		</div>
	);
};

export default Posts;
