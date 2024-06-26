import React from 'react';
import Status from '../../../../shared/UIkit/Status/Status';
import Tag from '../../../../shared/UIkit/Tag/Tag';
import { Task } from '../../../../types';
import './TaskCard.css';

type TaskCardProps = {
	task: Task;
	color: string;
	title: string;
	editTaskAction: React.FC<{ taskId: string }>;
	deleteTaskAction: React.FC<{ taskId: string }>;
	onDragStart: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
};

export default function TaskCard({
	task,
	color,
	title,
	editTaskAction,
	deleteTaskAction,
	onDragStart,
}: TaskCardProps) {
	return (
		<section
			className='card'
			draggable='true'
			onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
				onDragStart(event, task.id)
			}
		>
			<div className='card-title'>
				<h3>{task.title}</h3>
				<div className='card-buttons'>
					{editTaskAction({ taskId: task.id })}
					{deleteTaskAction({ taskId: task.id })}
				</div>
			</div>
			<div className='card-description'>{task.description}</div>
			<div className='card-status-div'>
				<Status color={color} title={title} />
			</div>
			<div className='card-tag-div'>
				{task.tags.map((tag, index) => {
					return <Tag key={index} tag={tag} />;
				})}
			</div>
		</section>
	);
}
