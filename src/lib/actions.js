'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from './db';
import { Post, User } from './models';
import { redirect } from 'next/navigation';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';

// ADD POST ACTION
export const addPost = async (prevState, formData) => {
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
		revalidatePath('/blog');
		revalidatePath('/admin');
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

// ADD USER ACTION
export const addUser = async (prevState, formData) => {
	const { username, email, password, avatar } = Object.fromEntries(formData);
	try {
		connectToDB();
		const newUser = new User({
			username,
			email,
			password,
			avatar,
		});
		await newUser.save();
		revalidatePath('/admin');
	} catch (err) {
		console.log(err);
		return { error: 'Something went wrong! The user was not created' };
	}
};

// DELETE POST ACTION
export const deletePost = async (prevState, formData) => {
	const id = formData.get('id');
	try {
		connectToDB();
		await Post.findByIdAndDelete(id);
		revalidatePath('/blog');
		revalidatePath('/admin');
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

// DELETE USER ACTION
export const deleteUser = async (prevState, formData) => {
	const id = formData.get('id');
	try {
		connectToDB();
		await Post.deleteMany({ userId: id });
		await User.findByIdAndDelete(id);
		revalidatePath('/admin');
	} catch (err) {
		console.log(err);
		return { error: 'Something went wrong! User could not be deleted.' };
	}
};

export const logInWithGitHub = async (e) => {
	await signIn('github');
};

export const logOut = async (e) => {
	await signOut();
};

export const signUpUser = async (previousState, formData) => {
	const { username, email, password, passwordRepeat, avatar } =
		Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return { error: 'Password does not match!' };
	}

	try {
		connectToDB();
		const user = await User.findOne({ username });

		if (user) {
			return { error: 'Username already exists!' };
		}
		// hashing user's password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			avatar,
		});

		await newUser.save();
		console.log(
			`User with the user name: ${username} has been saved to the DB`
		);
		return { success: true };
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export const logInWithUserCredentials = async (previousState, formData) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn('credentials', { username, password });
	} catch (err) {
		throw err;
	}
};
