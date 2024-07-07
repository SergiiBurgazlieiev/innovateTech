import styles from './Input.module.css';

export const Input = ({ type, name, placeholder, value }, props) => {
	if (type === 'textarea') {
		return (
			<textarea
				rows='5'
				cols='33'
				className={styles.inputField}
				{...props}
				name={name}
				placeholder={placeholder}
			/>
		);
	}
	return (
		<input
			className={styles.inputField}
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			{...props}
		/>
	);
};
