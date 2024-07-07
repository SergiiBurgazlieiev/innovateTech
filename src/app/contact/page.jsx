import Image from 'next/image';

import { Form } from '@/components/formElements/form/Form';
import { Input } from '@/components/formElements/input/Input';
import { Button } from '@/components/formElements/button/Button';
import styles from './contact.module.css';

export const metadata = {
	title: 'Contact Page',
	description: 'Contact us',
};

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
				<Form action=''>
					<Input type='text' placeholder='Name and Surname' name='name' id='' />
					<Input type='email' placeholder='Email Address' name='email' id='' />
					<Input type='phone' placeholder='Phone Number' name='phone' id='' />
					<Input
						id=''
						type='textarea'
						name='message'
						placeholder='Enter your message'
					/>
					<Button>Send</Button>
				</Form>
			</div>
		</div>
	);
};

export default ContactPage;
