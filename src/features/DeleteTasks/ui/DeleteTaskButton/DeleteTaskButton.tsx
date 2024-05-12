import { deleteTask } from '../../../../entities/Task/api/action';
import IconButton from '../../../../shared/UIkit/Button/IconButton';
import { ReactComponent as DeleteIcon } from '../../../../shared/icons/delete.svg';
import useStore from '../../../../shared/lib/store/store';

export default function DeleteTaskButton({ taskId }: { taskId: string }) {
	const task = useStore(state => state.tasks.find(item => item.id === taskId));
	const deleteTaskStore = useStore().deleteTask;
	const { isTaskFetching, setTaskFetching, addNotification } = useStore();

	const handleClick = () => {
		const removeTask = async () => {
			if (task) {
				const deletedTask = await deleteTask(task.columnId, taskId);
				if (deletedTask) {
					if (deletedTask instanceof Error)
						addNotification(
							`Deleting task error: ${deletedTask.message}`,
							'error'
						);
					else {
						deleteTaskStore(taskId);
						addNotification('Task successfully deleted', 'success');
					}
				}
			}
			setTaskFetching(false);
		};
		setTaskFetching(true);
		removeTask();
	};
	return (
		<div>
			<IconButton
				onClick={handleClick}
				svg={<DeleteIcon />}
				type='delete'
				position='task'
				disabled={isTaskFetching}
			/>
		</div>
	);
}
