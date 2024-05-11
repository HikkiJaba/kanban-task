import { editColumn } from '../../../../entities/Column/api/action';
import ColumnForm from '../../../../entities/Column/ui/ColumnForm/ColumnForm';
import Modal from '../../../../shared/UIkit/Modal/Modal';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal';
import useStore from '../../../../shared/lib/store/store';

export default function EditColumnButton({ columnId }: { columnId: string }) {
	const { isOpen, open, close } = useModal();
	const { setColumnFetching } = useStore();

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
			setColumnFetching(false);
		};
		setColumnFetching(true);
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
