import {Document, Schema, model, Model, Types} from 'mongoose';
import Post from './Post';
import {cleanUpDeleteQuery} from './queries';

export interface ICategoryDoc extends Document {
	name: string;
}

export interface ICategoryModel extends Model<ICategoryDoc> {
}

export const categorySchema: Schema = new Schema({
	name: {type: String, uppercase: true, required: true, unique: true},
});


categorySchema.post<ICategoryDoc>('findOneAndDelete', function(doc, next) {
   const categoryId = Types.ObjectId(doc.id);
   return Post
	   .updateMany(
		   {'categories': categoryId},
		   [
				   {'$set': {categories: {'$filter': {
								   input: '$categories',
								   as: 'category',
								   cond: {'$not': [{'$eq': ['$$category', categoryId]}]}
						   }}}
				   },
				   ...cleanUpDeleteQuery
		   ]
	   )
	   .then(() => next())
	   .catch(err => next(err));
});

export default model<ICategoryDoc, ICategoryModel>('Category', categorySchema);
