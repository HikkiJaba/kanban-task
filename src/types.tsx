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

export type NotificationType = {
	id: string;
	message: string;
	type: 'success' | 'error' | 'info';
};
