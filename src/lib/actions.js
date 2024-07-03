'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from './db';
import { Post, User } from './models';
import { redirect } from 'next/navigation';
import { signIn, signOut } from './auth';

export const addPost = async (formData) => {
	console.log(formData);
	const { title, desc, userId, slug } = Object.fromEntries(formData);
	try {
		connectToDB();
		const newPost = new Post({
			title,
			desc,
			userId,
			slug,
		});
		await newPost.save();
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
	revalidatePath('/blog');
	redirect('/blog');
};

export const deletePost = async (formData) => {
	const id = formData.get('id');
	try {
		connectToDB();
		await Post.findByIdAndDelete(id);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
	revalidatePath('/blog');
	redirect('/blog');
};

export const logIn = async (e) => {
	await signIn('github');
};

export const logOut = async (e) => {
	await signOut();
};

export const signUpUser = async (formData) => {
	console.log(formData);
	const { username, email, password, passwordRepeat, avatar } =
		Object.fromEntries(formData);
	if (password !== passwordRepeat) {
		return 'Password does not match!';
	}

	try {
		connectToDB();
		const user = await User.findOne({ username });

		if (user) {
			return 'User already exists!';
		}

		const newUser = new User({
			username,
			email,
			password,
			avatar,
		});

		await newUser.save();
		console.log(
			`User with the user name: ${username} has been saved to the DB`
		);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
