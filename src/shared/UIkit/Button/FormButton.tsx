import './FormButton.css';

type FormButtonProps = {
	type: 'button' | 'submit';
	title: string;
	disabled?: boolean;
	onClick?: () => void;
};

export default function FormButton({
	type,
	title,
	disabled,
	onClick,
}: FormButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className='form-button'
		>
			{title}
		</button>
	);
}
