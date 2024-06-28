import React from 'react';
import Image from 'next/image';
import styles from './contact.module.css';

const ContactPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src='/contact.png'
					alt='Contact image'
					fill
				/>
			</div>
			<div className={styles.formContainer}>
				<form action='' className={styles.form}>
					<input type='text' placeholder='Name and Surname' name='name' id='' />
					<input type='email' placeholder='Email Address' name='email' id='' />
					<input type='phone' placeholder='Phone Number' name='phone' id='' />
					<textarea
						name='message'
						id=''
						cols='30'
						rows='10'
						placeholder='Message'
					/>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
