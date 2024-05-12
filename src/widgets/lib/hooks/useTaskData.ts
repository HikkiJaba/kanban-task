import { useEffect } from 'react';
import { getAllTasks } from '../../../entities/Task/api/action';
import useStore from '../../../shared/lib/store/store';

export function useTasksData() {
	const { tasks, setTasks, addNotification } = useStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllTasks();
			if (response) {
				if (response instanceof Error) {
					addNotification(`Task fetching error: ${response.message}`, 'error');
				} else setTasks(response);
			}
		};
		fetchData();
	}, [setTasks, addNotification]);

	return tasks;
}
