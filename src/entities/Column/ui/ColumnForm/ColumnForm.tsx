import React, { useState } from 'react';
import FormButton from '../../../../shared/UIkit/Button/FormButton';
import Input from '../../../../shared/UIkit/Input/Input';
import useStore from '../../../../shared/lib/store/store';
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
	const { isColumnFetching } = useStore();

	const [title, setTitle] = useState<string>(initialColumn?.title || '');

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSubmit(title);
	};

	return (
		<form className='column-form' onSubmit={onSubmit}>
			<h2>{`${type} column`}</h2>
			<Input
				name='title'
				placeholder='Column title'
				label='Name'
				value={title}
				handleChange={event => setTitle(event.target.value)}
			/>
			<div className='column-form-buttons'>
				<FormButton type='submit' title='Save' disabled={isColumnFetching} />
				<FormButton type='button' title='Cancel' onClick={handleCancel} />
			</div>
		</form>
	);
}
