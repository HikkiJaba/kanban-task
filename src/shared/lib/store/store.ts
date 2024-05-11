import { create } from 'zustand';
import { Column, Task } from '../../../types';

type TaskState = {
	tasks: Task[];
	isTaskFetching: boolean;
	setTaskFetching: (isTaskFetching: boolean) => void;
	setTask: (task: Task) => void;
	setTasks: (tasks: Task[]) => void;
	editTask: (task: Task) => void;
	deleteTask: (taskId: string) => void;
};

type ColumnState = {
	columns: Column[];
	isColumnFetching: boolean;
	setColumnFetching: (isColumnFetching: boolean) => void;
	setColumn: (column: Column) => void;
	setColumns: (columns: Column[]) => void;
	editColumn: (column: Column) => void;
	deleteColumn: (columnId: string) => void;
};

const useStore = create<TaskState & ColumnState>()(set => ({
	tasks: [],
	columns: [],
	isTaskFetching: false,
	isColumnFetching: false,

	setTask: task => {
		set(state => {
			if (state.tasks.find(item => item.id === task.id)) return state;
			const newTasks = [...state.tasks];
			newTasks.push(task);
			return {
				...state,
				tasks: newTasks,
			};
		});
	},

	setTasks: tasks => {
		set(state => {
			return {
				...state,
				tasks,
			};
		});
	},

	editTask: task => {
		set(state => {
			const index = state.tasks.findIndex(item => item.id === task.id);
			const newTasks = [...state.tasks];
			newTasks[index] = task;
			return {
				...state,
				tasks: newTasks,
			};
		});
	},

	deleteTask: taskId => {
		set(state => {
			const index = state.tasks.findIndex(item => item.id === taskId);
			const newTasks = [...state.tasks];
			newTasks.splice(index, 1);
			return {
				...state,
				tasks: newTasks,
			};
		});
	},

	setTaskFetching: isTaskFetching => {
		set(state => ({
			...state,
			isTaskFetching,
		}));
	},

	setColumnFetching: isColumnFetching => {
		set(state => ({
			...state,
			isColumnFetching,
		}));
	},

	setColumn: column => {
		set(state => {
			if (state.columns.find(item => item.id === column.id)) return state;
			const newColumns = [...state.columns];
			newColumns.push(column);
			return {
				...state,
				columns: newColumns,
			};
		});
	},

	setColumns: columns => {
		set(state => {
			return {
				...state,
				columns,
			};
		});
	},

	editColumn: column => {
		set(state => {
			const index = state.columns.findIndex(item => item.id === column.id);
			const newColumns = [...state.columns];
			newColumns[index] = column;
			return {
				...state,
				columns: newColumns,
			};
		});
	},

	deleteColumn: columnId => {
		set(state => {
			const index = state.columns.findIndex(item => item.id === columnId);
			const newColumns = [...state.columns];
			newColumns.splice(index, 1);
			return {
				...state,
				columns: newColumns,
			};
		});
	},
}));

export default useStore;
