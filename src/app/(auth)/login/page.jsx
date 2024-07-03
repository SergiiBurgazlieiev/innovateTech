import React from 'react';
import { logInWithGitHub, logInWithUserCredentials } from '@/lib/actions';

const LoginPage = async () => {
	return (
		<div>
			<form action={logInWithGitHub}>
				<button>Login with GitHub</button>
			</form>
			<form action={logInWithUserCredentials}>
				<input type='text' placeholder='Enter your username' name='username' />
				<input
					type='password'
					placeholder='Enter your password'
					name='password'
				/>
				<button>Login with user credentials</button>
			</form>
		</div>
	);
};

export default LoginPage;
