import React from 'react';
import { loginIn } from '@/lib/actions';

const LoginPage = async () => {
	return (
		<div>
			<form action={loginIn}>
				<button>Login with GitHub</button>
			</form>
		</div>
	);
};

export default LoginPage;
