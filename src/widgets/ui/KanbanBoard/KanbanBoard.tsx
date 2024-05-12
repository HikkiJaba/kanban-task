import ColumnCard from '../../../entities/Column/ui/ColumnCard/ColumnCard';
import TaskCard from '../../../entities/Task/ui/TaskCard/TaskCard';
import AddColumnButton from '../../../features/AddColumn/ui/AddColumnButton/AddColumnButton';
import AddTaskButton from '../../../features/AddTask/ui/AddTaskButton/AddTaskButton';
import DeleteColumnButton from '../../../features/DeleteColumn/ui/DeleteColumnButton/DeleteColumnButton';
import DeleteTaskButton from '../../../features/DeleteTasks/ui/DeleteTaskButton/DeleteTaskButton';
import EditColumnButton from '../../../features/EditColumn/ui/EditColumnButton/EditColumnButton';
import EditTaskButton from '../../../features/EditTask/ui/EditTaskButton/EditTaskButton';
import { useColumnsData } from '../../lib/hooks/useColumnData';
import { useTasksData } from '../../lib/hooks/useTaskData';
import './KanbanBoard.css';

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
														editTaskAction={EditTaskButton}
														deleteTaskAction={DeleteTaskButton}
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
			<div className='kanban-add-button'>
				<AddColumnButton />
			</div>
		</div>
	);
}
