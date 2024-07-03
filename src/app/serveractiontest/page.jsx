import React from 'react';
import { addPost, deletePost } from '@/lib/actions';

const ServerActionTest = () => {
	return (
		<div>
			<h1>Server Action Test</h1>
			<form action={addPost}>
				<input type='text' name='title' placeholder='Title' />
				<input type='text' name='desc' placeholder='Description' />
				<input type='text' name='userId' placeholder='User Id' />
				<input type='text' name='slug' placeholder='Slug' />
				<button>TEST ME</button>
			</form>
			<form action={deletePost}>
				<input type='text' name='id' placeholder='Post Id' />
				<button>DELETE POST</button>
			</form>
		</div>
	);
};

export default ServerActionTest;
