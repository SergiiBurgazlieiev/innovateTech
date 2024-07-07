'use client';
// External modules
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

//Internal modules
import { signUpUser } from '@/lib/actions';
import { Input } from '../formElements/input/Input';
import { Form } from '../formElements/form/Form';
import { Button } from '../formElements/button/Button';

export const SignUpForm = () => {
	const [state, formAction] = useFormState(signUpUser, undefined);

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push('/login');
	}, [state?.success, router]);

	return (
		<Form action={formAction}>
			<Input type='text' name='username' placeholder='Enter your username' />
			<Input type='email' name='email' placeholder='Enter your email' />
			<Input
				type='password'
				name='password'
				placeholder='Enter your password'
			/>
			<Input
				type='password'
				name='passwordRepeat'
				placeholder='Enter your password again'
			/>
			<Button>SignUp</Button>
			{state?.error}
			<Link href='/login'>
				Have an Account? <b>Login</b>
			</Link>
		</Form>
	);
};
