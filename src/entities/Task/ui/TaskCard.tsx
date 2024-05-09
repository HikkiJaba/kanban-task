import React from 'react';
import Ready from '../../../shared/UIkit/Status/Ready/Ready.tsx';
import Tag from '../../../shared/UIkit/Tag/Tag.tsx';
import { Task } from '../../../types.tsx';
import './TaskCard.css';

export default function TaskCard({ task }: { task: Task }) {
	return (
		<section className='card'>
			<h3>{task.title}</h3>
			<div>
				<span>{task.description}</span>
			</div>
			<div className='card-status-div'>
				<Ready />
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
