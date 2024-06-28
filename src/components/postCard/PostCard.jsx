import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PostCard.module.css';

export const PostCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src='https://images.unsplash.com/photo-1719567225847-ddd4fde6102a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
						fill
					/>
				</div>
				<span className={styles.date}>06.28.2024</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>Title</h1>
				<p className={styles.desc}>Hello There!!!</p>
				<Link className={styles.link} href='/blog/post'>
					READ MORE
				</Link>
			</div>
		</div>
	);
};
