import {Document, Schema, Types, model} from 'mongoose';
import Category from './Category';

export interface IPostDoc extends Document {
	title: string;
	date: string;
	status: string;
	tags: string[];
	categories: Types.ObjectId[];
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
	tags: [String],
	categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
	featuredImage: {
		name: String,
		alt: String
	},
	body: String,
	seo_title: String,
	meta_description: String
});

/*
	Fires 3 times for some reason may need to refactor if speed becomes an issue.
	Maybe make it too a static method instead.
*/
postSchema.post<IPostDoc>('findOneAndUpdate', function(doc, next) {
	return Category
		.updateMany(
			{'_id': {'$in': doc.categories}},
			{'$addToSet': {posts: doc.id}},
			{new: true}
		)
		.then(() => next())
		.catch(err => next(err));
});

postSchema.post<IPostDoc>('findOneAndDelete', function(doc, next) {
	return Category
		.updateMany(
			{'_id': {'$in': doc.categories}},
			{'$pull': {posts: doc.id}}
		)
		.then(() => next())
		.catch(err => next(err));
});

export default model<IPostDoc>('Post', postSchema);
