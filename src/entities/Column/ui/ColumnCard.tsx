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
			<div className='column-tasks' style={{ backgroundColor: color }}>
				{tasks.map(task => {
					// @ts-ignore
					return <TaskComponent key={task.id} task={task} color={color} title={title}/>; //тут ошибка с color, я чуть позже гляну
				})}
			</div>
		</div>
	);
}
