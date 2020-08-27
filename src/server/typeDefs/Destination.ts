import {gql} from 'apollo-server-express';
import {continents} from '../models/Destination';

export default gql`
	enum Continents {
		${continents.join('\n')}
	}

	extend type Query {
		destinations: [Destination]!
		destination(id: String!): Destination!
		continents: [String]!
	}

	extend type Mutation {
		createDestination(country: String!, continent: Continents!): Destination
		removeDestination(id: String!): Boolean
	}

	type Destination {
		id: ID!
		continent: Continents!
		country: String!
	}
`;
