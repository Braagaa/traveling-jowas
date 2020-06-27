import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import {join} from 'path';
import env from './env.config';
import database from './database';
import {home} from './routes/';

import typeDefs from './typeDefs';
import models from './models';
import resolvers from './resolvers';

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(cors());

const server = new ApolloServer({
	typeDefs, 
	resolvers,
	context: {Category: models.Category, Post: models.Post}
});
server.applyMiddleware({app});

app.get('/', home);

//make error route and default error route

database()
	.then(() => console.log('mongodb connected'));

app.listen(env.PORT, () => {
	if (env.NODE_ENV === 'development') 
		console.log(`Listening at ${env.PORT}`);
});
