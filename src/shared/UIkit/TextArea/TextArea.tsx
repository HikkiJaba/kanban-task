import './TextArea.css';

type InputProps = {
	name: string;
	label: string;
	placeholder: string;
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Input({
	name,
	label,
	placeholder,
	value,
	handleChange,
}: InputProps) {
	return (
		<div className='form-textarea'>
			<label htmlFor='{name}'>{label}</label>
			<textarea
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}
