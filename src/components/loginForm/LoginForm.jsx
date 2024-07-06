'use client';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { logInWithUserCredentials } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
	const [state, formAction] = useFormState(logInWithUserCredentials, undefined);

	const router = useRouter();

	// useEffect(() => {
	// 	state?.success && router.push('/login');
	// }, [state?.success, router]);

	return (
		<form className={styles.form} action={formAction}>
			<input type='text' name='username' placeholder='Enter your username' />
			<input
				type='password'
				name='password'
				placeholder='Enter your password'
			/>
			<button>Login</button>
			{state?.error}
			<Link href='/signup'>
				Do not have an Account? <b>SignUp</b>
			</Link>
		</form>
	);
};
