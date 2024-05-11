import React from 'react';
import { addTask } from '../../../../entities/Task/api/action.ts';
import TaskForm from '../../../../entities/Task/ui/TaskForm/TaskForm.tsx';
import Modal from '../../../../shared/UIkit/Modal/Modal.tsx';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal.ts';
import useStore from '../../../../shared/lib/store/store.ts';
import './AddTaskButton.css';

export default function AddTaskButton({ columnId }: { columnId: string }) {
	const { isOpen, open, close } = useModal();
	const { setTask, setTaskFetching } = useStore();

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
			setTaskFetching(false);
		};
		setTaskFetching(true);
		putTask();
	};

	return (
		<div>
			<button type='button' className='add-task-button' onClick={open}>
				<svg
					width='17'
					height='16'
					viewBox='0 0 17 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M12.1145 7.375H8.83325V4.09375C8.83325 3.75 8.552 3.46875 8.20825 3.46875C7.8645 3.46875 7.58325 3.75 7.58325 4.09375V7.375H4.302C3.95825 7.375 3.677 7.65625 3.677 8C3.677 8.34375 3.95825 8.625 4.302 8.625H7.58325V11.9062C7.58325 12.25 7.8645 12.5312 8.20825 12.5312C8.552 12.5312 8.83325 12.25 8.83325 11.9062V8.625H12.1145C12.4583 8.625 12.7395 8.34375 12.7395 8C12.7395 7.65625 12.4583 7.375 12.1145 7.375Z'
						fill='currentColor'
					/>
				</svg>
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
