import React from 'react';
import Image from 'next/image';
import styles from './userPost.module.css';
import { getUser } from '@/lib/data';

export const UserPost = async ({ userId }) => {
	const { avatar, username } = await getUser(userId);

	return (
		<>
			<Image
				className={styles.avatar}
				src={avatar ? avatar : '/noavatar.png'}
				alt='Avatar image'
				height={50}
				width={50}
			/>
			<div className={styles.container}>
				<span className={styles.author}>Author</span>
				<span className={styles.userName}>{username}</span>
			</div>
		</>
	);
};
