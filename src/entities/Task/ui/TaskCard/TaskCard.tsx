import React from 'react';
import Status from '../../../../shared/UIkit/Status/Status.tsx';
import Tag from '../../../../shared/UIkit/Tag/Tag.tsx';
import { Task } from '../../../../types.tsx';
import './TaskCard.css';

interface TaskCardProps {
	task: Task;
	color: string;
	title: string;
	action: React.FC<{ taskId: string }>;
}

export default function TaskCard({
	task,
	color,
	title,
	action,
}: TaskCardProps) {
	return (
		<section className='card' draggable="true">
			<h3>{task.title}</h3>
			<div>
				<span>{task.description}</span>
			</div>
			<div className='card-status-div'>
				<Status color={color} title={title} />
			</div>
			<div className='card-tag-div'>
				{task.tags.map((tag, index) => {
					return (
						<div key={index}>
							<Tag tag={tag} />
						</div>
					);
				})}
			</div>
			{action({ taskId: task.id })}
		</section>
	);
}
