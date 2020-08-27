import {gql} from 'apollo-server-express';

import dateScalar from '../scalars/Date';
import categoryTypes from './Category';
import destinationTypes from './Destination';
import postTypes from './Post';
import imageTypes from './Image';

export type U = undefined;
export interface ID {
	id: string;
}

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
	destinationTypes,
	postTypes
];
