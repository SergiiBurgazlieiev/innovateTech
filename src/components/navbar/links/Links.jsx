'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { NavLink } from '../navLink/NavLink';
import { logOut } from '@/lib/actions';

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

export const Links = ({ session }) => {
	const [isOpen, setIsOpen] = useState(false);
	const isAdmin = session?.user?.isAdmin;
	const isUser = session?.user;

	const onMenuOpen = () => setIsOpen((isOpen) => !isOpen);

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((linkItem) => (
					<NavLink item={linkItem} key={linkItem.title} />
				))}

				{isUser ? (
					<>
						{isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
						<form action={logOut}>
							<button className={styles.logout}>Logout</button>
						</form>
					</>
				) : (
					<NavLink item={{ title: 'Login', path: '/login' }} />
				)}
			</div>
			<Image
				className={styles.menuBtn}
				onClick={onMenuOpen}
				src='/menu.png'
				alt='Menu image'
				width={30}
				height={30}
			/>
			{isOpen && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};
