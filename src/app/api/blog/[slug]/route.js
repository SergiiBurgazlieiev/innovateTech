import { connectToDB } from '@/lib/db';
import { Post } from '@/lib/models';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { slug } = params;
	try {
		connectToDB();
		const post = await Post.findOne({ slug });
		return NextResponse.json(post);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
