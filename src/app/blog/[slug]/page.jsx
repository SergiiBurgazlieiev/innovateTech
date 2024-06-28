import React from 'react';
import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
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
				<h1 className={styles.title}>Title</h1>
				<div className={styles.userDetails}>
					<Image
						className={styles.avatar}
						src='https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Avatar image'
						height={50}
						width={50}
					/>
					<div className={styles.details}>
						<span className={styles.author}>Author</span>
						<span className={styles.userName}>User Name</span>
					</div>
					<div className={styles.details}>
						<span className={styles.published}>Published</span>
						<span className={styles.date}>date</span>
					</div>
				</div>
				<div className={styles.content}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
					mollitia temporibus repudiandae, sequi iusto veniam. Quia vel, iure
					tenetur quo veritatis reiciendis eum rerum dolor laboriosam eos
					architecto maiores!
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
