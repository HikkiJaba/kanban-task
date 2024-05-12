import './Input.css';

type InputProps = {
	name: string;
	label: string;
	placeholder: string;
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
	name,
	label,
	placeholder,
	value,
	handleChange,
}: InputProps) {
	return (
		<div className='form-input'>
			<label htmlFor='{name}'>{label}</label>
			<input
				type='text'
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
