import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import env from './env.config';
import database from './database';

import typeDefs from './typeDefs';
import models from './models';
import resolvers from './resolvers';

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs, 
	resolvers,
	context: {Category: models.Category, Post: models.Post}
});
server.applyMiddleware({app});

database()
	.then(() => console.log('mongodb connected'));

app.listen(env.PORT, () => {
	if (env.NODE_ENV === 'development') 
		console.log(`Listening at ${env.PORT}`);
});
