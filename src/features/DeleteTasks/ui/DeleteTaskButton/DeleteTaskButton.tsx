import React from 'react';
import { deleteTask } from '../../../../entities/Task/api/action.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function DeleteTaskButton({ taskId }: { taskId: string }) {
	const task = useStore(state => state.tasks.find(item => item.id === taskId));
	const deleteTaskStore = useStore().deleteTask;
	const { isTaskFetching, setTaskFetching } = useStore();

	const handleClick = () => {
		const removeTask = async () => {
			if (task) {
				const deletedTask = await deleteTask(task.columnId, taskId);
				if (deletedTask) {
					deleteTaskStore(taskId);
				}
			}
			setTaskFetching(false);
		};
		setTaskFetching(true);
		removeTask();
	};
	return (
		<div>
			<button type='button' onClick={handleClick} disabled={isTaskFetching}>
				Delete
			</button>
		</div>
	);
}
