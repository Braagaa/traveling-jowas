import {IContext} from '../models/';
import {U, ID} from '../typeDefs/';

export default {
	Query: {
		categories: (_: U, __: U, {Category}: IContext) => Category.find(),
		category: (_: U, {id}: ID, {Category}: IContext) => Category
			.findById(id)
			.populate('posts')
	},

	Mutation: {
		createCategory: (_: U, {name}: {name: string}, {Category}: IContext) => Category
			.create({name, posts: []}),
		addPosts: (_: U, {id, posts}: {id: string, posts: string[]}, {Category}: IContext) => Category
			.addPosts(id, posts)
			.populate('posts'),
		removeCategory: (_: U, {id}: ID, {Category}: IContext) => Category
			.findByIdAndDelete(id)
			.then(obj => obj !== null)
	}
};
