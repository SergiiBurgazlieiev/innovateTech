import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>InnovateTech</div>
			<div className={styles.text}>
				Innovate radiant pulse creative agency © All rights reserved
			</div>
		</div>
	);
};
