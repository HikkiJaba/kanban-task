import React, { PropsWithChildren } from 'react';
import { Column } from '../../../../types';
import './ColumnCard.css';

type ColumnCardProps = {
    addTaskAction: React.FC<{ columnId: string }>;
    editColumnAction: React.FC<{ columnId: string }>;
    deleteColumnAction: React.FC<{ columnId: string }>;
    onDrop: (event: React.DragEvent<HTMLDivElement>, columnId: string) => void;
	onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
} & Column;


export default function ColumnCard({
	id,
	title,
	color,
	addTaskAction,
	editColumnAction,
	deleteColumnAction,
	children,
	onDrop,
	onDragLeave,
}: PropsWithChildren<ColumnCardProps>) {
	const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.currentTarget.classList.add("column-tasks-drag");
	}

	const dragEnd = (event: React.DragEvent<HTMLDivElement>) => {
		event.currentTarget.classList.remove("column-tasks-drag");
	}

	return (
		<div className='column'>
			<header className='column-header'>
				<h2>{title}</h2>
				<div className='column-buttons'>
					{editColumnAction({ columnId: id })}
					{deleteColumnAction({ columnId: id })}
				</div>
			</header>
			<div 
				onDragOver={dragOver} 
				onDragEnd={dragEnd} 
				onDragLeave={onDragLeave} 
				onDrop={(event) => onDrop(event, id)} 
				className='column-tasks' 
				style={{ backgroundColor: `${color}20` }}
			>
				{addTaskAction({ columnId: id })}
				{children}
			</div>
		</div>
	);
}
