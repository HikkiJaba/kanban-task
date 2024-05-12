import { addTask } from '../../../../entities/Task/api/action';
import TaskForm from '../../../../entities/Task/ui/TaskForm/TaskForm';
import IconButton from '../../../../shared/UIkit/Button/IconButton';
import Modal from '../../../../shared/UIkit/Modal/Modal';
import { ReactComponent as AddIcon } from '../../../../shared/icons/add.svg';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal';
import useStore from '../../../../shared/lib/store/store';

export default function AddTaskButton({ columnId }: { columnId: string }) {
	const { isOpen, open, close } = useModal();
	const { setTask, setTaskFetching } = useStore();

	const handleSubmit = (
		newTitle: string,
		newDescription: string,
		newTags: string[]
	) => {
		const putTask = async () => {
			const newTask = await addTask(
				columnId,
				newTitle,
				newDescription,
				newTags
			);
			if (newTask) {
				setTask(newTask);
				close();
			}
			setTaskFetching(false);
		};
		setTaskFetching(true);
		putTask();
	};

	return (
		<div>
			<IconButton
				onClick={open}
				svg={<AddIcon />}
				type='create'
				position='task'
			/>
			<Modal isOpen={isOpen} close={close}>
				<TaskForm
					type='Create'
					handleCancel={close}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
