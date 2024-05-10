import React, { PropsWithChildren } from 'react';
import { Column } from '../../../types';
import './ColumnCard.css';

type ColumnCardProps = {
	action: React.FC<{ columnId: string }>;
} & Column;

export default function ColumnCard({
	id,
	title,
	color,
	action,
	children,
}: PropsWithChildren<ColumnCardProps>) {
	return (
		<div className='column'>
			<h2>{title}</h2>
			<div className='column-tasks' style={{ backgroundColor: color }}>
				{action({ columnId: id })}
				{children}
			</div>
		</div>
	);
}
