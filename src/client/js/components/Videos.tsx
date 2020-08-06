import React from 'react';
import VideoItem,{VideoId} from './VideoItem';
import YoutubePlayer from './YoutubePlayer';
import Overlay from './Overlay';
import {useYoutubeAPI} from '../hooks/youtube';

interface Props {
	videoIds: string;
}

const Videos = function({videoIds}: Props) {
	const [player, isPlayerOn] = useYoutubeAPI(600);
	const ids: VideoId[] = videoIds.split(',');

	const playVideoHandler = (videoId: VideoId) => () => {
		player.loadVideoById(videoId);
	};
	const stopVideoHandler = () => {
		player.stopVideo();
	}

	return (
		<React.Fragment>
			<ul className="videos-list">
				{
					ids.map((videoId) => <VideoItem 
						key={videoId} 
						videoId={videoId}
						playVideoHandler={playVideoHandler(videoId)}
					/>)
				}
			</ul>
			<YoutubePlayer isPlayerOn={isPlayerOn}/>
			<Overlay active={isPlayerOn} onClickHandler={stopVideoHandler}/>
		</React.Fragment>
	);
};

export default Videos;
