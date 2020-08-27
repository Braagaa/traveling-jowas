import {gql} from '@apollo/client';

export interface IDInput {
	id: string;
}

export interface TravelCategory {
	id: string;
	name: string;
}

export interface TravelInput {
	name: string;
}

export interface TravelList {
	categories: TravelCategory[];
}

export const TRAVEL_LIST = gql`
	query {
		categories {
			id
			name
		}
	}
`;

export const CREATE_CATEGORY = gql`
	mutation createCategory($name: String!) {
		createCategory(name: $name) {
			id
			name
		}
	}
`;

export const DELETE_CATEGORY = gql`
	mutation removeCategory($id: String!) {
		removeCategory(id: $id) {
			id
		}
	}
`;

export interface ContinentList {
	continents: string[];
}

export interface Destination {
	id: string;
	country: string;
	continent: string;
}

export interface DestinationList {
	destinations: Destination[];
}

export type DestinationInput = Pick<Destination, 'country' | 'continent'>;

export const CONTINENT_LIST = gql`
	query {
		continents
	}
`;

export const DESTINATION_LIST = gql`
	query {
		destinations {
			id
			country
			continent
		}
	}
`;

export const CREATE_DESTINATION = gql`
	mutation createDestination($country: String!, $continent: Continents!) {
		createDestination(country: $country, continent: $continent) {
			id
			country
			continent
		}
	}
`;

export const DELETE_DESTINATION = gql`
	mutation removeDestination($id: String!) {
		removeDestination(id: $id)
	}
`;

export interface Image {
	name: string;
	alt: string;
}

export interface Post {
	id: string;
	title: string;
	date: Date;
	status: string;
	categories: TravelCategory[];
	featuredImage: Image;
	body: string;
	seo_title: string;
	meta_description: string;
}

export type PostInput = Partial<Omit<Post, 'id' | 'date'>> & Pick<Post, 'title'>;
