import React, { useState } from 'react';
import useStore from '../../../../shared/lib/store/store.ts';
import { Column } from '../../../../types.ts';
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
	const { isColumnFetching } = useStore();

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
			<button type='submit' disabled={isColumnFetching}>
				Save
			</button>
			<button type='button' onClick={handleCancel}>
				Cancel
			</button>
		</form>
	);
}
