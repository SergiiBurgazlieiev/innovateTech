'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.css';

export const NavLink = ({ item }) => {
	const pathname = usePathname();
	const isActive = pathname === item.path;

	return (
		<Link
			href={item.path}
			className={`${styles.container} ${isActive && styles.active}`}
		>
			{item.title}
		</Link>
	);
};
