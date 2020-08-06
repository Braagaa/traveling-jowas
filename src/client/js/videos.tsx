import React from 'react';
import ReactDOM from 'react-dom';
import Videos from './components/Videos';

const data = document.getElementById('data')!;

ReactDOM.render(
	<Videos videoIds={data.dataset.videoids || ""}/>,
	document.querySelector('.videos')
);

data.remove();
