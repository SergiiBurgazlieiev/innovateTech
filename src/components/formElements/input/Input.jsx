import styles from './Input.module.css';

export const Input = ({ type, name, placeholder, value, options }, props) => {
	if (type === 'textarea') {
		return (
			<textarea
				rows='5'
				cols='33'
				className={styles.inputField}
				name={name}
				placeholder={placeholder}
				{...props}
			/>
		);
	}

	if (type === 'select' && options) {
		return (
			<select
				className={styles.inputField}
				name={name}
				placeholder={placeholder}
				{...props}
			>
				{options.map(({ value, label }) => (
					<option value={value} key={label}>
						{label}
					</option>
				))}
			</select>
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
