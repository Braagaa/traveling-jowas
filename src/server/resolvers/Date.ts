import {GraphQLScalarType} from 'graphql';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export default {
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type for mongodb',
		parseValue(value) {
			return value;
		},
		serialize(value) {
			const date = new Date(value);
			return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
		}
	})
};
