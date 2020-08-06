import {useState, useEffect} from 'react';
import YoutubeNull, {IYoutubeNull} from '../classes/YoutubeNull';

type Player = YT.Player | IYoutubeNull;

const playingStates = [YT.PlayerState.BUFFERING];
const stopStates = [YT.PlayerState.ENDED, YT.PlayerState.CUED];

export const useYoutubeAPI = function(maxWidth: number): [Player, boolean] {
	const [isPlayerOn, setIsPlayerOn] = useState(false);
	const [player, setPlayer] = useState<Player>(
		new YoutubeNull()
	); 

	useEffect(() => {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';

		document.body.appendChild(tag);

		const onStateChange = function(event: YT.OnStateChangeEvent) {
			if (playingStates.includes(event.data)) {
				setIsPlayerOn(true);
			} else if (stopStates.includes(event.data)) {
				setIsPlayerOn(false);
				if (document.fullscreen) document.exitFullscreen();
			}
		}

		const onError = function(event: YT.OnErrorEvent) {
			console.log(event);
			setIsPlayerOn(false);
		}

		window.onYouTubeIframeAPIReady = function() {
			setPlayer(new YT.Player('player', {
				events: {onStateChange, onError}
			}));
		}
	}, []);

	//fullscreen code for small screens
	useEffect(() => {
		if (isPlayerOn && window.innerWidth < maxWidth) {
			const player = document.querySelector('#player');
			if (player) {
				player.requestFullscreen();
			}
		};
	}, [isPlayerOn]);

	//for small screens close player if exit fullscreen mode
	useEffect(() => {
		const eventFunction = (e: Event) => {
			if (window.innerWidth < maxWidth && !document.fullscreen) {
				setIsPlayerOn(false);
				player.stopVideo();
			}
		};

		document.addEventListener('fullscreenchange', eventFunction);

		return () => document.removeEventListener(
			'fullscreenchange', eventFunction
		);
	}, [player]);

	return [player, isPlayerOn];
};
