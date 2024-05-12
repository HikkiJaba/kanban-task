import './App.css';
import KanbanBoard from './widgets/ui/KanbanBoard/KanbanBoard';
import NotificationBoard from './widgets/ui/NotificationBoard/NotificationBoard';

function App() {
	return (
		<div className='App'>
			<KanbanBoard />
			<NotificationBoard />
		</div>
	);
}

export default App;
