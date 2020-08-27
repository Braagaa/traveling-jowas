import {gql} from 'apollo-server-express';

export default gql`
	extend type Query {
		images: [Image]!
		image(path: String!): Image!
	}

	type Image {
		name: String
		alt: String
	}
`;
