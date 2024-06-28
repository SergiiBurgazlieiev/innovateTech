import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
	return (
		<div>
			<div className={styles.imageContainer}>
				<Image
					src='https://images.pexels.com/photos/26652842/pexels-photo-26652842/free-photo-of-a-stairway-leading-up-to-a-glass-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt=''
					fill
				/>
			</div>
		</div>
	);
};

export default AboutPage;
