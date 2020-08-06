export interface IYoutubeNull {
	loadVideoById: (arg1: string) => void;
	stopVideo: () => void;
}

export default class YoutubeNull implements IYoutubeNull  {
	loadVideoById(videoId: string) {
	}
	stopVideo() {
	}
}
