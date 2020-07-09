import {Document, Schema, model, Model, Types} from 'mongoose';
import Post from './Post';

export interface ICategoryDoc extends Document {
	name: string;
	posts: Types.ObjectId[];
}

export interface ICategoryModel extends Model<ICategoryDoc> {
	addPosts(id: string, postStrIds: string[]): ICategoryDoc;
}

export const categorySchema: Schema = new Schema({
	name: {type: String, required: true, unique: true},
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

categorySchema.statics.addPosts = function(id: string, postStrIds: string[]) {
	const objectIds = postStrIds.map(Types.ObjectId);
	return this
		.findByIdAndUpdate(id, {'$addToSet': {posts: {'$each': objectIds}}})
};

/*
	Fires 3 times for some reason may need to refactor if speed becomes an issue.
	Maybe make it too a static method instead.
*/
categorySchema.post<ICategoryDoc>('findOneAndUpdate', function(doc, next) {
	return Post
		.updateMany(
			{'_id': {'$in': doc.posts}},
			{'$addToSet': {categories: doc.id}}
		)
		.then(() => next())
		.catch(err => next(err));
});

categorySchema.post<ICategoryDoc>('findOneAndDelete', function(doc, next) {
	const categoryId = Types.ObjectId(doc.id);
	return Post
		.updateMany(
			{'_id': {'$in': doc.posts}},
			[
				{'$set': {categories: {'$filter': { 
						input: '$categories',
						as: 'category',
						cond: {'$not': [{'$eq': ['$$category', categoryId]}]}
					}}}
				},
				{'$set': {length: {'$size': '$categories'}}},
				{'$set': {status: {'$cond': {
					if: {'$eq': ['$length', 0]},
					then: 'DRAFT',
					else: '$status'
				}}}},
				{'$unset': ['length']}
			]
		)
		.then(() => next())
		.catch(err => next(err));
});

export default model<ICategoryDoc, ICategoryModel>('Category', categorySchema);
