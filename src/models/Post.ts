import {Schema, model} from 'mongoose';
import {categorySchema} from './Category';

export const postSchema = new Schema({
	title: {type: String, required: true, unique: true},
	date: {type: Date, default: Date.now},
	status: {type: string, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT'},
	tags: [String],
	categories: [categorySchema],
	featuredImage: {
		name: String,
		alt: String
	},
	body: String,
	seo_title: String,
	meta_description: String
});

export default const Post = model('Post', postSchema);
