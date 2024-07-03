import React from 'react';
import { signUpUser } from '@/lib/actions';
import styles from './signup.module.css';

const SignUpPage = () => {
	return (
		<>
			<form className={styles.form} action={signUpUser}>
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
			</form>
		</>
	);
};

export default SignUpPage;
