import {IContext} from '../models/';
import {continents} from '../models/Destination';
import {U, ID} from '../typeDefs/';

interface DestinationInput {
	country: string;
	continent: string;
}

export default {
	Query: {
		destinations: (_: U, __: U, {Destination}: IContext) => Destination.find(),
		destination: (_: U, {id}: ID, {Destination}: IContext) => Destination
			.findById(id)
			.populate('posts'),
		continents: (_: U, __: U, ___: IContext) => continents
	},

	Mutation: {
		createDestination: (_: U, input: DestinationInput, {Destination}: IContext) => Destination
			.create({...input}),
		removeDestination: (_: U, {id}: ID, {Destination}: IContext) => Destination
			.findByIdAndDelete(id)
			.then(obj => obj !== null)
	}
};
