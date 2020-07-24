import React, {useState, useEffect} from 'react';

import ListingItem, {Listing} from './ListingItem';
import LoadButton from './LoadButton';

//temp delete after
const data: Listing[] = [
	{
		id: '0',
		title: 'THE 7 BEST AND MOST BEAUTIFUL ROAD TRIPS IN THE WORLD',
		text: 'The most scenic travels are seen from the road. From the United States to Europe, Africa, and even the Middle East - road trips around the world have been some of the best and most memorable adventures we have ever had. While being in a far off land all on your own might be scary, it is often the best and most freeing way to see and truly experience a destination. These are the 7 best, most photographable, and most life-changing road trips in the world.',
		imageURL: './assets/images/listing-test.jpg'
	},
	{
		id: '1',
		title: 'The Perfect 7-Day Southwest Road Trip Itinerary',
		text: "From Los Angeles, a National Park Tour of the American Southwest is one of the most incredible road trips you can do. My 7 Day Itinerary gives you the best of the best on a fast timeline without too much driving time - AND with all of the most scenic photography opportunities. Drive through Arizona, Utah, and Nevada see some of the greatest sites on the USA's map - from deserts to canyons to mountains.",
		imageURL: './assets/images/listing-test.jpg'
	},
	{
		id: '2',
		title: 'Need Affordable Snow Clothes? How to Get a Complete Ski Outfit for Under $100 ',
		text: "In preparing for our first ski trip, we were overwhelmed with the amount of options and how expensive snow clothes are! We dug around the internet and tested out every affordable option from Amazon, so you don't have to. These are the best deals around for functional, waterproof, and cute winter wear!",
		imageURL: './assets/images/listing-test.jpg'
	},
	{
		id: '3',
		title: 'Space Odyssey: Metallics in Red Rock Canyon, Las Vegas',
		text: "Style Diaries: Taking the Sparkle from the Strip and Bringing it out into the desert landscape. ",
		imageURL: './assets/images/listing-test.jpg'
	}
];

const Listings = function() {
	const [isLoading, setIsLoading] = useState(false);
	const [listings, setListings] = useState<Listing[]>([]);

	useEffect(() => {
		setTimeout(() =>{
			setListings(data);
		}, 1500);
	}, []);

	return listings.length > 0 ? (
		<React.Fragment>
			<ul className="listings-list">
				{
					listings
						.map(item => <ListingItem key={item.id} {...item}/>)
				}
			</ul>
			<div className="listings-load">
				<LoadButton
					setIsLoading={setIsLoading}
					isLoading={isLoading}
				/>
			</div>
		</React.Fragment>
	) : null;
}

export default Listings;
