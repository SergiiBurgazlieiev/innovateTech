'use client';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { signUpUser } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
	const [state, formAction] = useFormState(signUpUser, undefined);

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push('/login');
	}, [state?.success, router]);

	return (
		<form className={styles.form} action={formAction}>
			<input type='text' name='username' placeholder='Enter your username' />
			<input type='email' name='email' placeholder='Enter your email' />
			<input
				type='password'
				name='password'
				placeholder='Enter your password'
			/>
			<input
				type='password'
				name='passwordRepeat'
				placeholder='Enter your password again'
			/>
			<button>SignUp</button>
			{state?.message}
			<Link href='/login'>
				Have an Account? <b>Login</b>
			</Link>
		</form>
	);
};
