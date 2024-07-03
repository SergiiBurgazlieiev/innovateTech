import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Radiant Pulse Creative Agency</h1>
				<p className={styles.desc}>
					Welcome to Radiant Pulse Creative Agency, a dynamic creative agency
					specializing in innovative design, branding, and digital experiences.
					We turn ideas into captivating realities that engage and inspire.
				</p>
				<div className={styles.buttons}>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>
				<div className={styles.brands}>
					<Image src='/brands.png' alt='' fill className={styles.brandImage} />
				</div>
			</div>

			<div className={styles.imgContainer}>
				<Image src='/hero.gif' alt='' fill className={styles.heroImage} />
			</div>
		</div>
	);
};

export default Home;
