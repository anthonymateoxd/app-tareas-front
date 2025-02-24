import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const { getTasks, tasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, []);
  if (tasks.length === 0) return <h1>No tasks</h1>;
  return (
    <div className="row g-4 py-3">
      {tasks.map((task) => (
        <div className="col-md-4" key={task._id}>
          <TaskCard task={task} key={task._id} />
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
