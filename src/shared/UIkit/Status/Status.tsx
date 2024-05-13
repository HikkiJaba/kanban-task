import React from 'react';
import './Status.css';

export default function Status({
	color,
	title,
}: {
	color: string;
	title: string;
}) {
	return (
		<div className='status-theme'>
			<div
				className='status-div'
				style={{ '--status-color': `${color}20` } as React.CSSProperties}
			>
				<span>{title}</span>
				<span
					className='darker-color'
					style={{ '--circle-color': color } as React.CSSProperties}
				></span>
			</div>
		</div>
	);
}
