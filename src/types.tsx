export type Task = {
	id: string;
	title: string;
	description: string;
	status: string;
	tags: string[];
	color?: string;
};

export type Column = {
	title: string;
	tasks: Task[];
	TaskComponent: React.FC<{ task: Task }>;
	color: string;
};
