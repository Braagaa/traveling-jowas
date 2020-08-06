import React from 'react';

interface Props {
	isPlayerOn: boolean;
}

//div#player will become an iframe once youtube has been loaded globally
const YoutubePlayer = function({isPlayerOn}: Props) {
	const css = isPlayerOn ? 'player-wrapper player-active' : 'player-wrapper';

	return (
		<div className={css}>
			<div id="player"/>
		</div>
	);
};

export default YoutubePlayer;
