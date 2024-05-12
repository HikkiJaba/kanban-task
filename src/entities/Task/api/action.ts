import { baseURL } from '../../../app/constants/constants';
import { Task } from '../../../types';

export const getAllTasks = async () => {
	const allTasks = await fetch(`${baseURL}/tasks`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Task[]>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(tasks => {
			return tasks;
		})
		.catch(error => error as Error);
	return allTasks;
};

export const addTask = async (
	columnId: string,
	newTitle: string,
	newDescription: string,
	newTags: string[]
) => {
	const task = await fetch(`${baseURL}/columns/${columnId}/tasks`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			title: newTitle,
			description: newDescription,
			tags: newTags,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Task>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(task => {
			return task;
		})
		.catch(error => error as Error);
	return task;
};

export const editTask = async (
	taskId: string,
	newTitle: string,
	newDescription: string,
	newTags: string[],
	newColumnId: string
) => {
	const task = await fetch(`${baseURL}/tasks/${taskId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			title: newTitle,
			description: newDescription,
			tags: newTags,
			columnId: newColumnId,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Task>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(task => {
			return task;
		})
		.catch(error => error as Error);
	return task;
};

export const deleteTask = async (columnId: string, taskId: string) => {
	const deletedTask = await fetch(
		`${baseURL}/columns/${columnId}/tasks/${taskId}`,
		{
			method: 'DELETE',
		}
	)
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Task>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(task => {
			return task;
		})
		.catch(error => error as Error);
	return deletedTask;
};

export const deleteAllTasksByColumn = async (columnId: string) => {
	const tasksResponse = await fetch(`${baseURL}/columns/${columnId}/tasks`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	});
	const tasks = (await tasksResponse.json()) as Task[];
	const result = await Promise.all(
		tasks.map(task => deleteTask(columnId, task.id))
	);
	return result;
};
