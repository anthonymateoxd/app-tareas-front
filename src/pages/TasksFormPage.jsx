import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TasksFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTasks, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTasks(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <form
        onSubmit={onSubmit}
        className="p-4 border rounded-3 shadow bg-white w-50"
      >
        <div className="mb-3">
          <input
            type="text"
            {...register("title")}
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            rows="3"
            placeholder="Description"
            className="form-control"
            {...register("description")}
          ></textarea>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" {...register("date")} />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default TasksFormPage;
