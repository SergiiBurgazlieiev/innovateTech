import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PostCard.module.css';

export const PostCard = ({ post }) => {
	const { img, title, desc, slug } = post;
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						src={img ? img : '/nopostimg.jpg'}
						alt=''
						fill
					/>
				</div>
				<span className={styles.date}>06.28.2024</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.desc}>{desc}</p>
				<Link className={styles.link} href={`/blog/${slug}`}>
					READ MORE
				</Link>
			</div>
		</div>
	);
};
