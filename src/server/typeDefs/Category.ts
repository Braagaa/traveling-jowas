import {gql} from 'apollo-server-express';

export default gql`
	extend type Query {
		categories: [Category]!
		category(id: String!): Category!
	}

	extend type Mutation {
		createCategory(name: String!): Category
		removeCategory(id: String!): Category
	}

	type Category {
		id: ID!
		name: String!
	}
`;
