import { useTasks } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import days from 'dayjs';
import utc from 'dayjs/plugin/utc';
days.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className='card shadow-sm mb-4'>
      <div className='card-body'>
        <h5 className='card-title text-primary'>{task.title}</h5>
        <p className='card-text'>{task.description}</p>
        <div className='d-flex justify-content-between'>
          <button
            onClick={() => deleteTask(task._id)}
            className='btn btn-danger btn-sm'
          >
            Delete
          </button>
          <Link to={`/tasks/${task._id}`}>Edit</Link>
        </div>
        <p>{days(task.date).utc().format('DD/MM/YYYY')}</p>
      </div>
    </div>
  );
}

export default TaskCard;
