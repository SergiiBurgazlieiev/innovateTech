import React from 'react';
import { logIn } from '@/lib/actions';

const LoginPage = async () => {
	return (
		<div>
			<form action={logIn}>
				<button>Login with GitHub</button>
			</form>
		</div>
	);
};

export default LoginPage;
