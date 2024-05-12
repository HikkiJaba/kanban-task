import { baseURL } from '../../../app/constants/constants';
import { Column } from '../../../types';

export const getAllColumns = async () => {
	const allColumns = await fetch(`${baseURL}/columns`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Column[]>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(column => {
			return column;
		})
		.catch(error => error as Error);
	return allColumns;
};

export const addColumn = async (newTitle: string, newPosition: number) => {
	const column = await fetch(`${baseURL}/columns/`, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			title: newTitle,
			position: newPosition,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Column>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(column => {
			return column;
		})
		.catch(error => error as Error);

	return column;
};

export const editColumn = async (
	columnId: string,
	newTitle: string,
	newPosition: number
) => {
	const column = await fetch(`${baseURL}/columns/${columnId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			title: newTitle,
			position: newPosition,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Column>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(column => {
			return column;
		})
		.catch(error => error as Error);
	return column;
};

export const deleteColumn = async (columnId: string) => {
	const deletedColumn = await fetch(`${baseURL}/columns/${columnId}`, {
		method: 'DELETE',
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Column>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(column => {
			return column;
		})
		.catch(error => error as Error);
	return deletedColumn;
};
