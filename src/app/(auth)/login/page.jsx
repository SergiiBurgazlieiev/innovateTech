import React from 'react';
import { logInWithGitHub } from '@/lib/actions';
import { LoginForm } from '@/components/loginForm/LoginForm';
import styles from './login.module.css';

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form action={logInWithGitHub}>
					<button className={styles.github}>Login with GitHub</button>
				</form>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
