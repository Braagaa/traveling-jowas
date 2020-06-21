import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import env from './env.config';
import database from './database';

import typeDefs from './typeDefs';

const app = express();

app.use(cors());

const server = new ApolloServer({typeDefs, resolvers: {}});
server.applyMiddleware({app});

database()
	.then(() => console.log('mongodb connected'));

app.listen(env.PORT, () => {
	if (env.NODE_ENV === 'development') 
		console.log(`Listening at ${env.PORT}`);
});
