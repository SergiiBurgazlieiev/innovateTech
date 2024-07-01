import React from 'react';
import styles from './userPost.module.css';
import { getUser } from '@/lib/data';

// FETCH DATA WITH AN API
// const getUser = async (userId) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/users/${userId}`,
// 		{ cache: 'no-store' }
// 	);
// 	if (!res.ok) {
// 		throw new Error('Something went wrong!');
// 	}
// 	return res.json();
// };

export const UserPost = async ({ userId }) => {
	// FETCH DATA WITH AN API
	//const user = await getUser(userId);

	// FETCH DATA WITHOUT AN API
	const user = await getUser(userId);

	return (
		<div className={styles.container}>
			<span className={styles.author}>Author</span>
			<span className={styles.userName}>{user.name}</span>
		</div>
	);
};
