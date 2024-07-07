'use client';
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/actions';
import { Form } from '../formElements/form/Form';
import { Input } from '../formElements/input/Input';
import { Button } from '../formElements/button/Button';
import styles from './AdminUserForm.module.css';

const options = [
	{ value: false, label: 'Is Admin?' },
	{ value: false, label: 'No' },
	{ value: true, label: 'Yes' },
];

export const AdminUserForm = () => {
	const [state, formAction] = useFormState(addUser, undefined);

	return (
		<div className={styles.container}>
			<Form action={formAction}>
				<h1>Add New User</h1>
				<Input type='text' name='username' placeholder='Enter your username' />
				<Input type='email' name='email' placeholder='Enter your email' />
				<Input
					type='password'
					name='password'
					placeholder='Enter your password'
				/>
				<Input type='text' name='avatar' placeholder='Add your avatar image' />
				<Input type='select' name='isAdmin' options={options} />
				<Button>Add User</Button>
				{state?.error}
			</Form>
		</div>
	);
};
