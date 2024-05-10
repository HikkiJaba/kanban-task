import React from 'react';
import Status from '../../../../shared/UIkit/Status/Status.tsx';
import Tag from '../../../../shared/UIkit/Tag/Tag.tsx';
import { Task } from '../../../../types.tsx';
import './TaskCard.css';

interface TaskCardProps {
	task: Task;
	color?: string;
	title?: string;
}

export default function TaskCard({ task, color, title }: TaskCardProps) {
	/*getAllTasks();
	addTask(
		{
			title: 'Fix the auto height of the swim lanes',
			description:
				'Hope this simple kanban helps in running the UX processes without leaving figma',
			tags: ['taaag'],
		},
		'1'
	);*/
	//editTask('5', 'asdasd', 'new description', ['new taaag']);
	//deleteTask('5');

	return (
		<section className='card'>
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
		</section>
	);
}
