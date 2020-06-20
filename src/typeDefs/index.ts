import {gql} from 'apollo-server-express';

import dateScalar from '../scalars/Date';
import categoryTypes from './Category';
import postTypes from './Post';
import imageTypes from './Image';

const baseTypes = gql`
	type Query {
		_: Boolean
	}

	type Mutation {
		_: Boolean
	}
`;

export default [
	dateScalar,
	baseTypes,
	imageTypes,
	categoryTypes,
	postTypes
];
