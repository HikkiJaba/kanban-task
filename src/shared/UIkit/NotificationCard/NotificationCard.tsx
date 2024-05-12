import { useEffect } from 'react';
import { NotificationType } from '../../../types';
import useStore from '../../lib/store/store';
import './NotificationCard.css';

export default function NotificationCard({
	notification,
}: {
	notification: NotificationType;
}) {
	const { deleteNotification } = useStore();

	useEffect(() => {
		setTimeout(() => {
			deleteNotification(notification.id);
		}, 5000);
	}, [deleteNotification, notification.id]);
	return (
		<div className={`notification notification-${notification.type}`}>
			<div className='notification-status' />
			<div className='notification-icon' />
			<div className='notification-content'>
				<div className='notification-title'>
					<strong>{notification.type}</strong>
				</div>
				<p>{notification.message}</p>
			</div>
		</div>
	);
}
