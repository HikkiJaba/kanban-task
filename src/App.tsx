import './App.css';
import React, {useState} from 'react';
import KanbanBoard from './widgets/ui/KanbanBoard/KanbanBoard';
import NotificationBoard from './widgets/ui/NotificationBoard/NotificationBoard';

function App() {

	const [theme, setTheme] = useState('light');

  	const handleToggleTheme = () => {
    	setTheme(theme === 'light' ? 'dark' : 'light');
  	};
	return (
		<div className={`App ${theme}`}>
      		<KanbanBoard theme={theme} onToggleTheme={handleToggleTheme} />
			<NotificationBoard />
    	</div>
	);
}

export default App;
