import './IconButton.css';

type IconButtonProps = {
	onClick: () => void;
	svg: JSX.Element;
	position: 'task' | 'column' | 'board';
	type: 'edit' | 'create' | 'delete';
	disabled?: boolean;
};

export default function IconButton({
	onClick,
	svg,
	position,
	type,
	disabled,
}: IconButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			disabled={disabled}
			className={`icon-button icon-button-${position} icon-button-${type}`}
		>
			{svg}
		</button>
	);
}
