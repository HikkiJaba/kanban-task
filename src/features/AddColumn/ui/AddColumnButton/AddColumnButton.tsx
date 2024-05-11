import React from 'react';
import { addColumn } from '../../../../entities/Column/api/action.ts';
import ColumnForm from '../../../../entities/Column/ui/ColumnForm/ColumnForm.tsx';
import Modal from '../../../../shared/UIkit/Modal/Modal.tsx';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function AddColumnButton() {
	const { isOpen, open, close } = useModal();
	const { columns, setColumn } = useStore();

	const newPosition = columns.length + 1;

	const handleSubmit = (newTitle: string) => {
		const putColumn = async () => {
			const newColumn = await addColumn(newTitle, newPosition);
			if (newColumn) {
				setColumn(newColumn);
				close();
			}
		};
		putColumn();
	};

	return (
		<div>
			<button type='button' onClick={open}>
				Add
			</button>

			<Modal isOpen={isOpen} close={close}>
				<ColumnForm
					type='Create'
					handleCancel={close}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
