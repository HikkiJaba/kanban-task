import React from 'react';
import { addTask } from '../../../../entities/Task/api/action.ts';
import TaskForm from '../../../../entities/Task/ui/TaskForm/TaskForm.tsx';
import Modal from '../../../../shared/UIkit/Modal/Modal.tsx';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal.ts';
import useStore from '../../../../shared/lib/store/store.ts';

export default function AddTaskButton({ columnId }: { columnId: string }) {
	const { isOpen, open, close } = useModal();
	const { setTask } = useStore();

	const handleSubmit = (
		newTitle: string,
		newDescription: string,
		newTags: string[]
	) => {
		const putTask = async () => {
			const newTask = await addTask(
				columnId,
				newTitle,
				newDescription,
				newTags
			);
			if (newTask) {
				setTask(newTask);
				close();
			}
		};
		putTask();
	};

	return (
		<div>
			<button type='button' onClick={open}>
				Add
			</button>
			<Modal isOpen={isOpen} close={close}>
				<TaskForm
					type='Create'
					handleCancel={close}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
