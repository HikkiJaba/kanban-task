import React, { PropsWithChildren } from 'react';
import { Column } from '../../../../types';
import './ColumnCard.css';

type ColumnCardProps = {
	addTaskAction: React.FC<{ columnId: string }>;
	editColumnAction: React.FC<{ columnId: string }>;
	deleteColumnAction: React.FC<{ columnId: string }>;
} & Column;

export default function ColumnCard({
	id,
	title,
	color,
	addTaskAction,
	editColumnAction,
	deleteColumnAction,
	children,
}: PropsWithChildren<ColumnCardProps>) {
	return (
		<div className='column'>
			<header className='column-header'>
				<h2>{title}</h2>
				<div className='column-buttons'>
					{editColumnAction({ columnId: id })}
					{deleteColumnAction({ columnId: id })}
				</div>
			</header>
			<div className='column-tasks' style={{ backgroundColor: `${color}20` }}>
				{addTaskAction({ columnId: id })}
				{children}
			</div>
		</div>
	);
}
