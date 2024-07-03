import React, { Suspense } from 'react';
import Image from 'next/image';
import { UserPost } from '@/components/userPost/UserPost';
//import { getPost } from '@/lib/data';
import styles from './singlePost.module.css';

// FETCH POST WITH AN API (next.js api routes)
const getPostWithAPI = async (slug) => {
	const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
	if (!res.ok) {
		throw new Error('Something went wrong!');
	}

	return res.json();
};

export const generateMetadata = async ({ params }) => {
	const { slug } = params;
	//const { title, desc } = await getPost(slug);
	const { title, desc } = await getPostWithAPI(slug);
	return {
		title,
		description: desc,
	};
};

const SinglePostPage = async ({ params }) => {
	const { slug } = params;
	// FETCH POST WITH AN API (next.js api routes)
	const post = await getPostWithAPI(slug);

	// FETCH POST WITHOUT AN API (server action)
	// const post = await getPost(slug);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image className={styles.img} src={post.img} alt='' fill />
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.userDetails}>
					{post && (
						<Suspense fallback={<div>Loading...</div>}>
							<UserPost userId={post.userId} />
						</Suspense>
					)}
					<div className={styles.details}>
						<span className={styles.published}>Published</span>
						<span className={styles.date}>Date</span>
					</div>
				</div>
				<div className={styles.content}>{post.desc}</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
