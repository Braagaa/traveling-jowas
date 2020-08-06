import React from 'react';
import {activeClass} from '../util/fn';

interface Props {
	active: boolean;
	onClickHandler: (...args: any) => any;
}

const Overlay = function({active, onClickHandler}: Props) {
	const css = activeClass(active, 'overlay');

	return (
		<div className={css} onClick={onClickHandler}/>	
	);
};

export default Overlay;
