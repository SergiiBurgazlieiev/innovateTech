'use client';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/actions';
import styles from './AdminUserForm.module.css';

export const AdminUserForm = () => {
	const [state, formAction] = useFormState(addUser, undefined);

	return (
		<form action={formAction} className={styles.container}>
			<h1>Add New User</h1>
			<input type='text' name='username' placeholder='Enter your username' />
			<input type='email' name='email' placeholder='Enter your email' />
			<input
				type='password'
				name='password'
				placeholder='Enter your password'
			/>
			<input type='text' name='avatar' placeholder='Add your avatar image' />
			<select name='isAdmin'>
				<option value={false}>Is Admin?</option>
				<option value={false}>No</option>
				<option value={true}>Yes</option>
			</select>
			<button>Add User</button>
			{state?.error}
		</form>
	);
};
