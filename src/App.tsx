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
			<div>
				<ColumnCard
					id='1'
					title='Not started'
					position={0}
					color='rgba(248, 250, 252, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "1")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(248, 250, 252, 1)'
								title='Not started'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
			<div>
				<ColumnCard
					id='2'
					title='Ready'
					position={0}
					color='rgba(235, 235, 255, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "2")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(235, 235, 255, 1)'
								title='Ready'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
			<div>
				<ColumnCard
					id='3'
					title='In progress'
					position={0}
					color='rgba(227, 243, 252, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "3")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(227, 243, 252, 1)'
								title='In progress'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
			<div>
				<ColumnCard
					id='4'
					title='Blocked'
					position={0}
					color='rgba(251, 231, 229, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "4")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(251, 231, 229, 1)'
								title='Blocked'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
			<div>
				<ColumnCard
					id='5'
					title='Done'
					position={0}
					color='rgba(238, 248, 232, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "5")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(238, 248, 232, 1)'
								title='Done'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
			<div>
				<ColumnCard
					id='6'
					title='Cancelled'
					position={0}
					color='rgba(236, 237, 239, 1)'
					action={AddTaskButton}
				>
					{tasks
					.filter(task => task.columnId === "6")
					.map(task => {
						return (
							<TaskCard
								key={task.id}
								task={task}
								color='rgba(236, 237, 239, 1)'
								title='Cancelled'
								action={EditTaskButton}
							/>
						);
					})}
				</ColumnCard>
			</div>
		</div>
	);
}

export default App;
