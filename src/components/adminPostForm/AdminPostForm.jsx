'use client';
//import { useActionState } from 'react'; // react canary, we should wait until next.js is going to release update.
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/actions';
import styles from './AdminPostForm.module.css';

export const AdminPostForm = ({ session }) => {
	const [state, formAction] = useFormState(addPost, undefined);
	const userId = session.user.id;
	return (
		<form action={formAction} className={styles.container}>
			<h1>Add New Post</h1>
			<input type='hidden' name='userId' value={userId} />
			<input type='text' name='title' placeholder='Post title' />
			<input type='text' name='img' placeholder='Post Image' />
			<input type='text' name='slug' placeholder='Post Slug' />
			<textarea
				type='text'
				name='desc'
				placeholder='Post Description'
				rows={10}
			/>
			<button>Add Post</button>
			{state?.error}
		</form>
	);
};
