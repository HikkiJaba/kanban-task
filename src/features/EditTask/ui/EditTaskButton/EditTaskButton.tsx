import { editTask } from '../../../../entities/Task/api/action';
import TaskForm from '../../../../entities/Task/ui/TaskForm/TaskForm';
import Modal from '../../../../shared/UIkit/Modal/Modal';
import { useModal } from '../../../../shared/lib/hooks/useModal/useMoodal';
import useStore from '../../../../shared/lib/store/store';

export default function EditTaskButton({ taskId }: { taskId: string }) {
	const { isOpen, open, close } = useModal();

	const task = useStore(state => state.tasks.find(item => item.id === taskId));
	const edit = useStore().editTask;
	const { setTaskFetching } = useStore();

	const handleSubmit = (
		newTitle: string,
		newDescription: string,
		newTags: string[]
	) => {
		const putTask = async () => {
			if (task) {
				const newTask = await editTask(
					taskId,
					newTitle,
					newDescription,
					newTags,
					task.columnId
				);
				if (newTask) {
					edit(newTask);
					close();
				}
				setTaskFetching(false);
			}
		};
		setTaskFetching(true);
		putTask();
	};

	return (
		<div>
			<button onClick={open} type='button'>
				edit
			</button>
			<Modal isOpen={isOpen} close={close}>
				<TaskForm
					type='Edit'
					handleCancel={close}
					initialTask={task}
					handleSubmit={handleSubmit}
				/>
			</Modal>
		</div>
	);
}
