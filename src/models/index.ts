import Category from './Category';
import Post from './Post';

export interface IContext {
	Category: typeof Category;
	Post: typeof Post;
}

export default {
	Category,
	Post
};
