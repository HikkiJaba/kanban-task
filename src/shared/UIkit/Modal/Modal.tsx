import { ReactNode } from 'react';
import './Modal.css';

type ModalProps = {
	isOpen: boolean;
	close: () => void;
	children: ReactNode;
};

export default function Modal({ isOpen, close, children }: ModalProps) {
	return (
		<div>
			{isOpen && (
				<div className='modal' onClick={close}>
					<div
						className='modal-content'
						onClick={event => event.stopPropagation()}
					>
						{children}
					</div>
				</div>
			)}
		</div>
	);
}
