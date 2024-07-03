'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from './db';
import { Post } from './models';
import { redirect } from 'next/navigation';
import { signIn } from './auth';

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

export const loginIn = async (e) => {
	await signIn('github');
};
