import React, { useState } from 'react';
import { Column } from '../../../../types';
import './ColumnForm.css';

type FormProps = {
	handleSubmit: (newTitle: string) => void;
	handleCancel: () => void;
	type: 'Create' | 'Edit';
	initialColumn?: Column;
};

export default function ColumnForm({
	handleSubmit,
	handleCancel,
	type,
	initialColumn,
}: FormProps) {
	/*const [column, setColumn] = useState<Omit<Column, 'id' | 'color' | 'position'>>({
		title: initialColumn?.title || '',
	});*/

	const [title, setTitle] = useState<string>(initialColumn?.title || '');

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSubmit(title);
	};

	return (
		<form className='column-form' onSubmit={onSubmit}>
			<h2>{`${type} column`}</h2>
			<input
				value={title}
				onChange={event => setTitle(event.target.value)}
				name='title'
				type='text'
			/>
			<button type='submit'>Save</button>
			<button type='button' onClick={handleCancel}>
				Cancel
			</button>
		</form>
	);
}
