import React from 'react';
import { NavLink } from '../navLink/NavLink';

import styles from './Links.module.css';

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
		<div className={styles.links}>
			{links.map((linkItem) => (
				<NavLink item={linkItem} key={linkItem.title} />
			))}
		</div>
	);
};
