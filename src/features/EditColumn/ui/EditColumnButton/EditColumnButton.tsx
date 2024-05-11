import React from 'react';
import { editColumn } from '../../../../entities/Column/api/action.ts';
import ColumnForm from '../../../../entities/Column/ui/ColumnForm/ColumnForm.tsx';
import Modal from '../../../../shared/UIkit/Modal/Modal.tsx';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function EditColumnButton({ columnId }: { columnId: string }) {
	const { isOpen, open, close } = useModal();

	const column = useStore(state =>
		state.columns.find(item => item.id === columnId)
	);
	const edit = useStore().editColumn;

	const handleSubmit = (newTitle: string) => {
		const putColumn = async () => {
			if (column) {
				const newColumn = await editColumn(columnId, newTitle, column.position);
				if (newColumn) {
					edit(newColumn);
					close();
				}
			}
		};
		putColumn();
	};

	return (
		<div>
			<button onClick={open} type='button'>
				edit
			</button>
			<Modal isOpen={isOpen} close={close}>
				<ColumnForm
					type='Edit'
					handleCancel={close}
					initialColumn={column}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
