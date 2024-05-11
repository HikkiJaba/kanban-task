import React from 'react';
import { deleteTask } from '../../../../entities/Task/api/action.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function DeleteTaskButton({ taskId }: { taskId: string }) {
	const task = useStore(state => state.tasks.find(item => item.id === taskId));
	const deleteTaskStore = useStore().deleteTask;

	const handleClick = () => {
		const removeTask = async () => {
			if (task) {
				const deletedTask = await deleteTask(task.columnId, taskId);
				if (deletedTask) {
					deleteTaskStore(taskId);
				}
			}
		};
		removeTask();
	};
	return (
		<div>
			<button type='button' onClick={handleClick}>
				Delete
			</button>
		</div>
	);
}
