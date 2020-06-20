import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';

import typeDefs from './typeDefs';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('env', process.env.NODE_ENV || 'development');

app.use(cors());

const server = new ApolloServer({typeDefs, resolvers: {}});
server.applyMiddleware({app});

app.listen(app.get('port'), () => {
	if (app.get('env') === 'development') 
		console.log(`Listening at ${app.get('port')}`);
});
