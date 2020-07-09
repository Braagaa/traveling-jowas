import React from 'react';

import YouTubeIcon from '../../images/youtube.svg';
import InstaGramIcon from '../../images/instagram.svg';
import TikTokIcon from '../../images/tiktok.svg';

const data = [
	['https://www.youtube.com/user/hannahgem16', YouTubeIcon],
	['https://www.tiktok.com/@hannahgem16', InstaGramIcon],
	['https://www.instagram.com/hannahgem16/', TikTokIcon]
];

const createSocial = function([link, SVG]: string[]) {
	return (
		<li key={link}>
			<a href={link} target="_blank">
				<SVG/>
			</a>
		</li>
	);
}

const Socials = function() {
	return (
		<ul className="social">
			{
				data.map(createSocial)
			}
		</ul>
	);
}

export default Socials;
