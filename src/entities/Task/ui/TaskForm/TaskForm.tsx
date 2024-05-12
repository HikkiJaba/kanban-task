import React, { useState } from 'react';
import FormButton from '../../../../shared/UIkit/Button/FormButton';
import Input from '../../../../shared/UIkit/Input/Input';
import TextArea from '../../../../shared/UIkit/TextArea/TextArea';
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

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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
			<Input
				name='title'
				placeholder='Task title'
				label='Name'
				value={task.title}
				handleChange={handleChange}
			/>
			<TextArea
				name='description'
				placeholder='Task description'
				label='Description'
				value={task.description}
				handleChange={handleChange}
			/>
			<Input
				name='tags'
				placeholder='Task tags (e.g. "tag1, tag2, ...")'
				label='Tags'
				value={task.tags.join(',')}
				handleChange={handleChange}
			/>
			<div className='task-form-buttons'>
				<FormButton type='submit' title='Save' disabled={isTaskFetching} />
				<FormButton type='button' title='Cancel' onClick={handleCancel} />
			</div>
		</form>
	);
}
