import { Post, User } from './models';
import { connectToDB } from './db';

export const getPosts = async () => {
	try {
		connectToDB();
		const posts = await Post.find();
		return posts;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch posts');
	}
};

export const getPost = async (slug) => {
	try {
		connectToDB();
		const post = Post.findOne({ slug });
		return post;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch a single post');
	}
};

export const getUsers = async () => {
	try {
		connectToDB();
		const users = User.find();
		return users;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch users');
	}
};

export const getUser = async (userId) => {
	console.log(userId);
	try {
		connectToDB();
		const user = User.findById(userId);
		return user;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch a user');
	}
};
