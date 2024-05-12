import { addColumn } from '../../../../entities/Column/api/action';
import ColumnForm from '../../../../entities/Column/ui/ColumnForm/ColumnForm';
import IconButton from '../../../../shared/UIkit/Button/IconButton';
import Modal from '../../../../shared/UIkit/Modal/Modal';
import { ReactComponent as AddIcon } from '../../../../shared/icons/add.svg';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal';
import useStore from '../../../../shared/lib/store/store';

export default function AddColumnButton() {
	const { isOpen, open, close } = useModal();
	const { columns, setColumn, setColumnFetching, addNotification } = useStore();

	const newPosition = columns.length + 1;

	const handleSubmit = (newTitle: string) => {
		const putColumn = async () => {
			const newColumn = await addColumn(newTitle, newPosition);
			if (newColumn) {
				if (newColumn instanceof Error)
					addNotification(`Adding column error: ${newColumn.message}`, 'error');
				else {
					setColumn(newColumn);
					close();
					addNotification('Column successfully added', 'success');
				}
			}
			setColumnFetching(false);
		};
		setColumnFetching(true);
		putColumn();
	};

	return (
		<div>
			<IconButton
				onClick={open}
				svg={<AddIcon />}
				type='create'
				position='board'
			/>
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
