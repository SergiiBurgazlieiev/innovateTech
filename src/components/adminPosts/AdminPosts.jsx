import Image from 'next/image';
import { getPosts } from '@/lib/data';
import { deletePost } from '@/lib/actions';

import styles from './AdminPosts.module.css';

export const AdminPosts = async () => {
	const posts = await getPosts();

	return (
		<div className={styles.container}>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<div className={styles.detail}>
						<Image src={post.img} alt={post.title} width={100} height={100} />
						<span className={styles.title}>{post.title}</span>
					</div>
					<form action={deletePost}>
						<input type='hidden' name='id' value={post.id} />
						<button className={styles.postButton}>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};
