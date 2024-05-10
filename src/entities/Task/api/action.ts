import { baseURL } from '../../../app/constants/constants.ts';
import { Task } from '../../../types';

export const getAllTasks = async () => {
	const allTasks = await fetch(`${baseURL}/tasks`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Task[]>;
			} else throw new Error('Error occurred!');
		})
		.then(tasks => {
			return tasks;
		})
		.catch(error => console.log(error));
	return allTasks;
};

export const addTask = async (
	newTask: Omit<Task, 'id' | 'status'>,
	columnId: string
) => {
	fetch(`${baseURL}/columns/${columnId}/tasks`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(newTask),
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else throw new Error('Error occurred!');
		})
		.then(task => {
			console.log(task);
		})
		.catch(error => console.log(error));
};

export const editTask = async (
	taskId: string,
	newTitle: string,
	newDescription: string,
	newTags: string[]
) => {
	fetch(`${baseURL}/tasks/${taskId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			title: newTitle,
			description: newDescription,
			tags: newTags,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else throw new Error('Error occurred!');
		})
		.then(task => {
			console.log(task);
		})
		.catch(error => console.log(error));
};

export const deleteTask = async (columnId: string, taskId: string) => {
	fetch(`${baseURL}/columns/${columnId}/tasks/${taskId}`, {
		method: 'DELETE',
	})
		.then(response => {
			if (response.ok) {
				return response.json();
			} else throw new Error('Error occurred!');
		})
		.then(task => {
			console.log(task);
		})
		.catch(error => console.log(error));
};
