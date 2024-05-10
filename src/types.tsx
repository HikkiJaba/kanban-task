export type Task = {
	id: string;
	title: string;
	description: string;
	tags: string[];
	columnId: string;
};

export type Column = {
	id: string;
	title: string;
	color: string;
	position: number;
};

export type ColumnWithTasks = {
	tasks: Task[];
	TaskComponent: React.FC<{
		task: Task;
		color: string;
		title: string;
		action: React.FC;
	}>;
} & Column;
