import React from 'react';

export interface Listing {
	id: string;
	title: string;
	text: string;
	imageURL: string;
}

const Item = function({id, title, text, imageURL}: Listing) {
	return (
		<li>
			<div className="listing">
				<a href={`/story/${id}`} className="listing">
					<div className="listing-image">
						<img src={imageURL}/>
					</div>
					<h3 className="tout-title">{title}</h3>
					<div className="tout-content">{text}</div>
				</a>
			</div>
		</li>
	);
}

export default Item;
