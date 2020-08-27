import {Document, Schema, Types, model} from 'mongoose';
import Category from './Category';

export interface IPostDoc extends Document {
	title: string;
	date: string;
	status: string;
	categories: Types.ObjectId[];
	destination?: Types.ObjectId;
	featuredImage?: {
		name: string;
		alt?: string;
	};
	body?: string;
	seo_title?: string;
	meta_description?: string;
}

export const postSchema: Schema = new Schema({
	title: {type: String, required: true, unique: true},
	date: {type: Date, default: Date.now},
	status: {type: String, enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT'},
	categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
	destination: Schema.Types.ObjectId,
	featuredImage: {
		name: String,
		alt: String
	},
	body: String,
	seo_title: String,
	meta_description: String
});

//TODO PUBLISHED status only availble if categories.length > 0 && destination !== NULL

postSchema.index({destination: 1, categories: 1});

export default model<IPostDoc>('Post', postSchema);
