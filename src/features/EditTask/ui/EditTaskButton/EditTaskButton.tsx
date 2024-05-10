import React from 'react';
import { editTask } from '../../../../entities/Task/api/action.ts';
import TaskForm from '../../../../entities/Task/ui/TaskForm/TaskForm.tsx';
import Modal from '../../../../shared/UIkit/Modal/Modal.tsx';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function EditTaskButton({ taskId }: { taskId: string }) {
	const { isOpen, open, close } = useModal();

	const task = useStore(state => state.tasks.find(item => item.id === taskId));
	const edit = useStore().editTask;

	const handleSubmit = (
		newTitle: string,
		newDescription: string,
		newTags: string[]
	) => {
		const putTask = async () => {
			const newTask = await editTask(taskId, newTitle, newDescription, newTags);
			if (newTask) {
				edit(newTask);
				close();
			}
		};
		putTask();
	};

	return (
		<div className='div'>
			<button onClick={open} type='button'>
				edit
			</button>
			<Modal isOpen={isOpen} close={close}>
				<TaskForm
					type='Edit'
					handleCancel={close}
					initialTask={task}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
