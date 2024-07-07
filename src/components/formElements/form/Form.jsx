import styles from './Form.module.css';

export const Form = ({ action, children }, props) => (
	<form className={styles.form} action={action} {...props}>
		{children}
	</form>
);
