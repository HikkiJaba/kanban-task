import React from 'react';
import './Status.css';

export default function Status({
	color,
	title,
}: {
	color: string;
	title: string;
}) {
	/*const rgbaRegex = /rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/;
	const matches = color.match(rgbaRegex);
	const r = parseInt(matches![1]);
	const g = parseInt(matches![2]);
	const b = parseInt(matches![3]);
	const a = parseFloat(matches![4]);

	const darkerColor = `rgba(${r}, ${g}, ${b}, ${a - 0.5})`;*/

	return (
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
	);
}
