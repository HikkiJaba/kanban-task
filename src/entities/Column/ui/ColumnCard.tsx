import React, { PropsWithChildren } from 'react';
import { Column } from '../../../types';
import './ColumnCard.css';

export default function ColumnCard({
	title,
	color,
	//action,
	children,
}: PropsWithChildren<Column>) {
	return (
		<div className='column'>
			<h2>{title}</h2>
			<div className='column-tasks' style={{ backgroundColor: color }}>
				{/* {tasks.map(task => {
					return (
						<TaskComponent
							key={task.id}
							task={task}
							color={color}
							title={title}
							action={EditTaskButton}
						/>
					); //тут ошибка с color, я чуть позже гляну
				})} */}
				{/* {action} */}
				{children}
			</div>
		</div>
	);
}
