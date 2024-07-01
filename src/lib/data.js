//temp data

const users = [
	{ id: 1, name: 'Jane' },
	{ id: 2, name: 'Sergii' },
];

const posts = [
	{ id: 1, title: 'Post1', body: 'lorem', userId: 1 },
	{ id: 2, title: 'Post2', body: 'lorem', userId: 2 },
	{ id: 3, title: 'Post3', body: 'lorem', userId: 1 },
	{ id: 4, title: 'Post4', body: 'lorem', userId: 2 },
];

export const getPosts = async () => {
	return posts;
};

export const getPost = async (id) => {
	return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (userId) => {
	return users.find((user) => user.id === parseInt(userId));
};
