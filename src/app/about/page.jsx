import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 className={styles.subTitle}>About Agency</h2>
				<h1 className={styles.title}>
					We create captivating visuals & compelling content.
				</h1>
				<p className={styles.desc}>
					Innovate Agency specializes in crafting unique and impactful brand
					experiences through cutting-edge design, innovative strategies, and
					creative storytelling.
				</p>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<h1>10 K+</h1>
						<p>Year of experience</p>
					</div>
					<div className={styles.box}>
						<h1>234 K+</h1>
						<p>People reached</p>
					</div>
					<div className={styles.box}>
						<h1>5K+</h1>
						<p>Services and plugins</p>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image className={styles.img} src='/about.png' alt='About image' fill />
			</div>
		</div>
	);
};

export default AboutPage;
