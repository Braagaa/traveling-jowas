import {gql} from 'apollo-server-express';

export default gql`
	type Image {
		name: String
		alt: String
	}
`;
