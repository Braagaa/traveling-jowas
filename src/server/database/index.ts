import mongoose from 'mongoose';
import env from '../env.config';

const dataBase = () => mongoose.connect(env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

export default dataBase;
