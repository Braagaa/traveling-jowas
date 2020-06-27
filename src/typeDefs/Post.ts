import {gql} from 'apollo-server-express';

const postArgs = `
	status: String
	tags: [String]
	categories: [String]
	featuredImage: ImageInput
	body: String
	seo_title: String
	meta_description: String
`;

export default gql`
	extend type Query {
		posts: [Post]
		post(id: String!): Post
	}

	extend type Mutation {
		createPost(post: CreatePostInput): Post
		updatePost(id: String!, post: UpdatePostInput): Post
		deletePost(id: String!): Boolean
	}

	input ImageInput {
		featuredImageName: String
		featuredImageAlt: String
	}

	input CreatePostInput {
		title: String!
		${postArgs}
	}

	input UpdatePostInput {
		${postArgs}
	}

	type Post {
		id: ID!
		title: String!
		date: Date!
		status: String!
		tags: [String]!
		categories: [Category]!
		featuredImage: Image
		body: String
		seo_title: String
		meta_description: String
	}
`;
