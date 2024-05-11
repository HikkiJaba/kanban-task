import { addColumn } from '../../../../entities/Column/api/action';
import ColumnForm from '../../../../entities/Column/ui/ColumnForm/ColumnForm';
import Modal from '../../../../shared/UIkit/Modal/Modal';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal';
import useStore from '../../../../shared/lib/store/store';

export default function AddColumnButton() {
	const { isOpen, open, close } = useModal();
	const { columns, setColumn, setColumnFetching } = useStore();

	const newPosition = columns.length + 1;

	const handleSubmit = (newTitle: string) => {
		const putColumn = async () => {
			const newColumn = await addColumn(newTitle, newPosition);
			if (newColumn) {
				setColumn(newColumn);
				close();
			}
			setColumnFetching(false);
		};
		setColumnFetching(true);
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
