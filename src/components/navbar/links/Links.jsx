import React from 'react';
import Link from 'next/link';

const links = [
	{
		title: 'Homepage',
		path: '/',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
	{
		title: 'Blog',
		path: '/blog',
	},
];

export const Links = () => {
	return (
		<div>
			{links.map(({ title, path }) => (
				<Link key={title} href={path}>
					{title}
				</Link>
			))}
		</div>
	);
};
