'use client';
//import { useActionState } from 'react'; // react canary, we should wait until next.js is going to release update.
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/actions';
import styles from './AdminPostForm.module.css';
import { Form } from '../formElements/form/Form';
import { Input } from '../formElements/input/Input';
import { Button } from '../formElements/button/Button';

export const AdminPostForm = ({ session }) => {
	const [state, formAction] = useFormState(addPost, undefined);
	const userId = session.user.id;
	return (
		<div className={styles.container}>
			<Form action={formAction}>
				<h1>Add New Post</h1>
				<Input type='hidden' name='userId' value={userId} />
				<Input type='text' name='title' placeholder='Post title' />
				<Input type='text' name='img' placeholder='Post Image' />
				<Input type='text' name='slug' placeholder='Post Slug' />
				<Input type='textarea' name='desc' placeholder='Post Description' />
				<Button>Add Post</Button>
				{state?.error}
			</Form>
		</div>
	);
};
