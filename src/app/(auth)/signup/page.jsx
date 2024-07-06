import React from 'react';
import { SignUpForm } from '@/components/signupForm/SignupForm';
import styles from './signup.module.css';

const SignUpPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignUpPage;
