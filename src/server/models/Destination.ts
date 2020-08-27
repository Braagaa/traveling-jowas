import {Document, Schema, model, Model, Types} from 'mongoose';
import Post from './Post';
import {cleanUpDeleteQuery} from './queries';

export interface IDestinationDoc extends Document {
	continent: string;
	country: string;
}

export interface IDestinationModel extends Model<IDestinationDoc> {
}

export const continents = [
	'AFRICA',
	'ASIA',
	'EUROPE',
	'MIDDLE_EAST',
	'NORTH_AMERICA',
	'OCEANIA',
	'SOUTH_AMERICA'
];

export const destinationSchema: Schema = new Schema({
	continent: {type: String, enum: continents, default: null},
	country: {type: String, uppercase: true, required: true, unique: true},
});

destinationSchema.post<IDestinationDoc>('findOneAndDelete', function(doc, next) {
	const destinationId = Types.ObjectId(doc.id);
	return Post
		.updateMany(
			{'destination': destinationId},
			[
				{'$set': {destination: null}},
				...cleanUpDeleteQuery
			]
		);
});

export default model<IDestinationDoc, IDestinationModel>('Destination', destinationSchema);
