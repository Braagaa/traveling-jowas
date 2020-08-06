import React, {MouseEvent} from 'react';
import PlaySVG from '../../images/play-button.svg';

export type VideoId = string;

interface Props {
	videoId: string;
	playVideoHandler: (event: MouseEvent) => void;
}

const Item = function({videoId, playVideoHandler}: Props) {
	return (
		<li className="videos-item">
			<div className="video">
				<a onClick={playVideoHandler}>
					<div className="video-image">
						<img src={`https://img.youtube.com/vi/${videoId}/0.jpg`}/>
						<PlaySVG/>
					</div>
					<h2 className="tout-title">NAME OF VIDEO</h2>
				</a>
			</div>
		</li>
	);
};

export default Item;
