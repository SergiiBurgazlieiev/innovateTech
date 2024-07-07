'use client';
// External modules
import { useFormState } from 'react-dom';
import Link from 'next/link';

// Internal modules
import { Form } from '../formElements/form/Form';
import { Input } from '../formElements/input/Input';
import { Button } from '../formElements/button/Button';
import { logInWithUserCredentials } from '@/lib/actions';

export const LoginForm = () => {
	const [state, formAction] = useFormState(logInWithUserCredentials, undefined);

	return (
		<Form action={formAction}>
			<Input type='text' name='username' placeholder='Enter your username' />
			<Input
				type='password'
				name='password'
				placeholder='Enter your password'
			/>
			<Button>Login</Button>
			{state?.error}
			<Link href='/signup'>
				Do not have an Account? <b>SignUp</b>
			</Link>
		</Form>
	);
};
