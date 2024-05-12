import NotificationCard from '../../../shared/UIkit/NotificationCard/NotificationCard';
import useStore from '../../../shared/lib/store/store';
import './NotificationBoard.css';

export default function NotificationBoard() {
	const { notifications } = useStore();
	return (
		<div className='notification-board'>
			{notifications.map(notification => {
				return (
					<NotificationCard key={notification.id} notification={notification} />
				);
			})}
		</div>
	);
}
