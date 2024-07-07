import styles from './Input.module.css';

export const Input = ({ type, name, placeholder, value }, ...props) => (
	<input
		className={styles.inputField}
		type={type}
		name={name}
		placeholder={placeholder}
		value={value}
		{...props}
	/>
);
