import { deleteColumn } from '../../../../entities/Column/api/action';
import { deleteAllTasksByColumn } from '../../../../entities/Task/api/action';
import IconButton from '../../../../shared/UIkit/Button/IconButton';
import { ReactComponent as DeleteIcon } from '../../../../shared/icons/delete.svg';
import useStore from '../../../../shared/lib/store/store';

export default function DeleteColumnButton({ columnId }: { columnId: string }) {
	const columnTasks = useStore(state =>
		state.tasks.filter(item => item.columnId === columnId)
	);
	const deleteColumnStore = useStore().deleteColumn;
	const deleteTaskStore = useStore().deleteTask;
	const { isColumnFetching, setColumnFetching } = useStore();

	const handleClick = () => {
		const removeColumn = async () => {
			if (columnTasks.length > 0) {
				const deletedTasks = await deleteAllTasksByColumn(columnId);
				if (deletedTasks) {
					const deletedColumn = await deleteColumn(columnId);
					if (deletedColumn) {
						columnTasks.map(task => deleteTaskStore(task.id));
						deleteColumnStore(columnId);
					}
				}
			} else {
				const deletedColumn = await deleteColumn(columnId);
				if (deletedColumn) {
					deleteColumnStore(columnId);
				}
			}
			setColumnFetching(false);
		};
		setColumnFetching(true);
		removeColumn();
	};
	return (
		<IconButton
			onClick={handleClick}
			svg={<DeleteIcon />}
			type='delete'
			position='column'
			disabled={isColumnFetching}
		/>
	);
}
