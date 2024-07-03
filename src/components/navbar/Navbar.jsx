import React from 'react';
import Link from 'next/link';
import { Links } from './links/Links';
import { auth } from '@/lib/auth';
import styles from './Navbar.module.css';

export const Navbar = async () => {
	const session = await auth();

	return (
		<div className={styles.container}>
			<Link href='/' className={styles.logo}>
				InnovateTech
			</Link>
			<div>
				<Links session={session} />
			</div>
		</div>
	);
};
