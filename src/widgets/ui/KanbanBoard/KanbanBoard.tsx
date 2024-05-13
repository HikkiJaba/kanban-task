import React from 'react';
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
import { Task } from '../../../types';
import { editTaskColumnId, getAllTasks } from '../../../entities/Task/api/action';
import './KanbanBoard.css';
import useStore from '../../../shared/lib/store/store';

export default function KanbanBoard() {
    const tasks = useTasksData();
    const columns = useColumnsData();
    const setTasksInStore = useStore(state => state.setTasks);

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>, taskId: string) => {
        event.dataTransfer.setData('text/plain', taskId);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.classList.remove("column-tasks-drag");
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>, columnId: string) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('text/plain');
        if (taskId) {
            editTaskColumnId(taskId, columnId)
                .then((updatedTask: Task) => {
                    getAllTasks()
                        .then((result: Task[] | Error) => {
                            if (result instanceof Array) {
                                setTasksInStore(result);
                            } else {
                                console.error('Error fetching tasks:', result.message);
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching tasks:', error);
                        });
                })
                .catch(error => {
                    console.error('Error updating task:', error);
                });
        }
    };

    return (
        <div className='kanban-board'>
            <ul className='kanban-columns-list'>
                {columns.map(column => (
                    <li key={column.id}>
                        <ColumnCard
                            id={column.id}
                            title={column.title}
                            position={column.position}
                            color={column.color}
                            addTaskAction={AddTaskButton}
                            editColumnAction={EditColumnButton}
                            deleteColumnAction={DeleteColumnButton}
                            onDrop={(event) => handleDrop(event, column.id)}
                            onDragLeave={handleDragLeave}
                        >
                            <ul className='kanban-column-tasks'>
                                {tasks
                                    .filter(task => task.columnId === column.id)
                                    .map(task => (
                                        <li key={task.id}>
                                            <TaskCard
                                                task={task}
                                                color={column.color}
                                                title={column.title}
                                                editTaskAction={EditTaskButton}
                                                deleteTaskAction={DeleteTaskButton}
                                                onDragStart={(event) => handleDragStart(event, task.id)}
                                            />
                                        </li>
                                    ))}
                            </ul>
                        </ColumnCard>
                    </li>
                ))}
            </ul>
            <div className='kanban-add-button'>
                <AddColumnButton />
            </div>
        </div>
    );
}
