import { connectToDB } from '@/lib/db';
import { Post } from '@/lib/models';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		connectToDB();
		const posts = await Post.find();
		return NextResponse.json(posts);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
