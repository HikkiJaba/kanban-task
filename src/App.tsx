import React, { useEffect } from 'react';
import './App.css';
import ColumnCard from './entities/Column/ui/ColumnCard.tsx';
import { getAllTasks } from './entities/Task/api/action.ts';
import TaskCard from './entities/Task/ui/TaskCard/TaskCard.tsx';
import AddTaskButton from './features/AddTask/ui/AddTaskButton/AddTaskButton.tsx';
import EditTaskButton from './features/EditTask/ui/EditTaskButton/EditTaskButton.tsx';
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
	const { columns } = useStore();

	return (
		<div className='App'>
			<ColumnCard
				id='1'
				title='In progress'
				position={0}
				color='rgba(98, 83, 218, 1)'
				action={AddTaskButton}
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
		</div>
	);
}

export default App;
