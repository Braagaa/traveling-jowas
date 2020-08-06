export interface Path {
	text: string;
	link: string;
	links: Path[];
}

const createPath = (text: string, link: string, links: Path[] = []): Path =>
	({text, link, links});

const travelPath: Path[] = [
	createPath("TIPS", "/"),
	createPath("GUIDES", "/")
];

const PATHS: Path[] = [
	createPath("DESTINATIONS", "/destinations"),
	createPath("TRAVEL", "/", travelPath),
	createPath("SERVICES", "/services"),
	createPath("VIDEOS", "/videos"),
	createPath("ABOUT", "/about"),
];

export default PATHS;
