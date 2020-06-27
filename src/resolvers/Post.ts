import {IContext} from '../models/';
import {IPostDoc} from '../models/Post';
import {U, ID} from '../typeDefs/';

type PostInput = {id: string, post: IPostDoc};

export default {
	Query: {
		posts: (_: U, __: U, {Post}: IContext) => Post.find(),
		post: (_: U, {id}: ID, {Post}: IContext) => Post
			.findById(id)
			.populate('categories')
	},

	Mutation: {
		createPost: (_: U, {post}: PostInput, {Post}: IContext) => Post
			.create({...post}),
		updatePost: (_: U, {id, post}: PostInput, {Post}: IContext) => Post
			.findByIdAndUpdate(id, post, {new: true})
			.populate('categories'),
		deletePost: (_: U, {id}: ID, {Post}: IContext) => Post
			.findByIdAndDelete(id)
			.then(obj => obj !== null)
	}
};
