import { useEffect } from 'react';
import { getAllColumns } from '../../../entities/Column/api/action';
import useStore from '../../../shared/lib/store/store';

export function useColumnsData() {
	const { columns, setColumns, addNotification } = useStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllColumns();
			if (response) {
				if (response instanceof Error) {
					addNotification(`Task fetching error: ${response.message}`, 'error');
				} else setColumns(response);
			}
		};
		fetchData();
	}, [setColumns, addNotification]);

	return columns;
}
