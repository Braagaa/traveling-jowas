import Category from './Category';
import Destination from './Destination';
import Post from './Post';

export interface IContext {
	Category: typeof Category;
	Post: typeof Post;
	Destination: typeof Destination;
}

export default {
	Category,
	Destination,
	Post
};
