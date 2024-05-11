import React, { useState } from 'react';
import useStore from '../../../../shared/lib/store/store';
import { Task } from '../../../../types';
import './TaskForm.css';

type FormProps = {
	handleSubmit: (
		newTitle: string,
		newDescription: string,
		newTags: string[]
	) => void;
	handleCancel: () => void;
	type: 'Create' | 'Edit';
	initialTask?: Task;
};

export default function TaskForm({
	handleSubmit,
	handleCancel,
	type,
	initialTask,
}: FormProps) {
	const [task, setTask] = useState<Omit<Task, 'id' | 'columnId'>>({
		title: initialTask?.title || '',
		description: initialTask?.description || '',
		tags: initialTask?.tags || [],
	});

	const { isTaskFetching } = useStore();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.name === 'tags') {
			setTask({
				...task,
				[event.target.name]: event.target.value.split(','),
			});
		} else {
			setTask({
				...task,
				[event.target.name]: event.target.value,
			});
		}
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSubmit(task.title, task.description, task.tags);
	};

	return (
		<form className='task-form' onSubmit={onSubmit}>
			<h2>{`${type} task`}</h2>
			<input
				value={task.title}
				onChange={handleChange}
				name='title'
				type='text'
			/>
			<input
				value={task.description}
				onChange={handleChange}
				name='description'
				type='text'
			/>
			<input
				value={task.tags.join(',')}
				onChange={handleChange}
				name='tags'
				type='text'
			/>
			<button type='submit' disabled={isTaskFetching}>
				Save
			</button>
			<button type='button' onClick={handleCancel}>
				Cancel
			</button>
		</form>
	);
}
