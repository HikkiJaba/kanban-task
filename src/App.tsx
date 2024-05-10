import React, { useEffect } from 'react';
import './App.css';
import ColumnCard from './entities/Column/ui/ColumnCard.tsx';
import { getAllTasks } from './entities/Task/api/action.ts';
import TaskCard from './entities/Task/ui/TaskCard/TaskCard.tsx';
import { useModal } from './shared/lib/hooks/useModal/useMoodal.ts';
import useStore from './shared/lib/store/store.ts';

//пока тут все тестирую, потом куда-то перенесу
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
				tasks={tasks}
				TaskComponent={TaskCard}
				color='rgba(98, 83, 218, 1)'
			/>
		</div>
	);
}

export default App;
