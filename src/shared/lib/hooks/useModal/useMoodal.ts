import { useState } from 'react';

export function useModal() {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		setIsOpen(false);
	};
	const open = () => {
		setIsOpen(true);
	};

	return { isOpen, close, open };
}
