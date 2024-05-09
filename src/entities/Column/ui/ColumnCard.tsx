import React from 'react';
import { Column } from '../../../types';
import './ColumnCard.css';

export default function ColumnCard({
	title,
	tasks,
	color,
	TaskComponent,
}: Column) {
	return (
		<div className='column'>
			<h2>{title}</h2>
			<div className='column-tasks'>
				{tasks.map(task => {
					return <TaskComponent key={task.id} task={task} />;
				})}
			</div>
		</div>
	);
}
