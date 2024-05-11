import { useEffect } from 'react';
import { getAllColumns } from '../../../entities/Column/api/action';
import ColumnCard from '../../../entities/Column/ui/ColumnCard/ColumnCard';
import { getAllTasks } from '../../../entities/Task/api/action';
import TaskCard from '../../../entities/Task/ui/TaskCard/TaskCard';
import AddColumnButton from '../../../features/AddColumn/ui/AddColumnButton/AddColumnButton';
import AddTaskButton from '../../../features/AddTask/ui/AddTaskButton/AddTaskButton';
import DeleteColumnButton from '../../../features/DeleteColumn/ui/DeleteColumnButton/DeleteColumnButton';
import DeleteTaskButton from '../../../features/DeleteTasks/ui/DeleteTaskButton/DeleteTaskButton';
import EditColumnButton from '../../../features/EditColumn/ui/EditColumnButton/EditColumnButton';
import EditTaskButton from '../../../features/EditTask/ui/EditTaskButton/EditTaskButton';
import useStore from '../../../shared/lib/store/store';
import './KanbanBoard.css';

//перенести в другую папку
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

function useColumnsData() {
	const { columns, setColumns } = useStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllColumns();
			if (response) setColumns(response);
		};
		fetchData();
	}, [setColumns]);

	return columns;
}
/////

export default function KanbanBoard() {
	const tasks = useTasksData();
	const columns = useColumnsData();
	return (
		<div className='kanban-board'>
			<ul className='kanban-columns-list'>
				{columns.map(column => {
					return (
						<li key={column.id}>
							<ColumnCard
								id={column.id}
								title={column.title}
								position={column.position}
								color={column.color}
								addTaskAction={AddTaskButton}
								editColumnAction={EditColumnButton}
								deleteColumnAction={DeleteColumnButton}
							>
								<ul className='kanban-column-tasks'>
									{tasks
										.filter(task => task.columnId === column.id)
										.map(task => {
											return (
												<li key={task.id}>
													<TaskCard
														task={task}
														color={column.color}
														title={column.title}
														actions={[EditTaskButton, DeleteTaskButton]}
													/>
												</li>
											);
										})}
								</ul>
							</ColumnCard>
						</li>
					);
				})}
			</ul>
			<AddColumnButton />
		</div>
	);
}
