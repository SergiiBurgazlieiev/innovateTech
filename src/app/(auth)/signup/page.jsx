import React from 'react';
import { signUpUser } from '@/lib/actions';

const SignUpPage = () => {
	return (
		<>
			<form action={signUpUser}>
				<input type='text' name='username' placeholder='Enter your username' />
				<input type='email' name='email' placeholder='Enter your email' />
				<input
					type='password'
					name='password'
					placeholder='Enter your password'
				/>
				<input
					type='password'
					name='Enter your password again'
					placeholder='passwordRepeat'
				/>
				<button>SignUp</button>
			</form>
		</>
	);
};

export default SignUpPage;
