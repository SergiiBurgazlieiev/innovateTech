import React, { Suspense } from 'react';
import Image from 'next/image';
import { UserPost } from '@/components/userPost/UserPost';
import { getPost } from '@/lib/data';
import styles from './singlePost.module.css';

// FETCH DATA WITH AN API
// const getPost = async (id) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// 	if (!res.ok) {
// 		throw new Error('Something went wrong!');
// 	}
// 	return res.json();
// };

const SinglePostPage = async ({ params }) => {
	// FETCH DATA WITH AN API
	//const post = await getPost(params.slug);

	// FETCH DATA WITHOUT AN API
	const post = await getPost(params.slug);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src='https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt=''
					fill
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.userDetails}>
					<Image
						className={styles.avatar}
						src='https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Avatar image'
						height={50}
						width={50}
					/>
					{post && (
						<Suspense fallback={<div>Loading...</div>}>
							<UserPost userId={post.userId} />
						</Suspense>
					)}
					<div className={styles.details}>
						<span className={styles.published}>Published</span>
						<span className={styles.date}>date</span>
					</div>
				</div>
				<div className={styles.content}>{post.body}</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
