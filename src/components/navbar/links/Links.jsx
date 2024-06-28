'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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

// Temp for now
const userSession = true;
const isAdmin = true;

export const Links = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onMenuOpen = () => setIsOpen((isOpen) => !isOpen);

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((linkItem) => (
					<NavLink item={linkItem} key={linkItem.title} />
				))}

				{userSession ? (
					<>
						{isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
						<button className={styles.logout}>Logout</button>
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
