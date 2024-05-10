import React, { useEffect } from 'react';
import './App.css';
import ColumnCard from './entities/Column/ui/ColumnCard.tsx';
import { getAllTasks } from './entities/Task/api/action.ts';
import TaskCard from './entities/Task/ui/TaskCard/TaskCard.tsx';
import TaskForm from './entities/Task/ui/TaskForm/TaskForm.tsx';
import EditTaskButton from './features/EditTask/ui/EditTaskButton/EditTaskButton.tsx';
import Modal from './shared/UIkit/Modal/Modal.tsx';
import { useModal } from './shared/lib/hooks/useModal/useMoodal.ts';
import useStore from './shared/lib/store/store.ts';

function useTasksData() {
	const { tasks, setTasks } = useStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllTasks();
			if (response) setTasks(response);
		};
		fetchData();
	}, [setTasks]);

	return tasks;
}

function App() {
	const tasks = useTasksData();
	const { isOpen, close, open } = useModal();
	const { columns } = useStore();

	return (
		<div className='App'>
			<ColumnCard
				id='1'
				title='In progress'
				position={0}
				color='rgba(98, 83, 218, 1)'
			>
				{tasks.map(task => {
					return (
						<TaskCard
							key={task.id}
							task={task}
							color='rgba(98, 83, 218, 1)'
							title='In progress'
							action={EditTaskButton}
						/>
					);
				})}
			</ColumnCard>

			<Modal isOpen={isOpen} close={close}>
				<TaskForm
					handleSubmit={() => {}}
					handleCancel={close}
					type='Edit'
					initialTask={{
						id: '1',
						title: 'task title',
						description: 'task description',
						tags: ['tag1', 'tag2'],
						columnId: '4',
					}}
				/>
			</Modal>
		</div>
	);
}

export default App;
