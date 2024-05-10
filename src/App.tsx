import React from 'react';
import './App.css';
import ColumnCard from './entities/Column/ui/ColumnCard.tsx';
import TaskCard from './entities/Task/ui/TaskCard.tsx';

function App() {
	return (
		<div className='App'>
			<ColumnCard
				title='Ready'
				tasks={[
					{
						id: '1',
						title: 'task title',
						description: 'task description',
						status: 'status',
						tags: ['tag1', 'tag2'],
					},
				]}
				TaskComponent={TaskCard}
				color='aaaaaa'
			/>
		</div>
	);
}

export default App;
