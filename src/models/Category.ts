import {Schema, model} from 'mongoose';
import {postSchema} from './Post';

export const categorySchema = new Schema({
	name: {type: String, required: true, unique: true},
	posts: [postSchema]
});

export default const Category = model('Category', categorySchema);
