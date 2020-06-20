import {gql} from 'apollo-server-express';

export default gql`
	extend type Query {
		categories: [Category]!
		category(id: String!): Category!
	}

	extend type Mutation {
		createCategory(name: String!): Category
		removeCategory(id: String!): Boolean
	}

	type Category {
		name: String!
		posts: [Post]!
	}
`;
