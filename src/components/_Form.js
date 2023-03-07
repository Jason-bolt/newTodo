import { useCallback, useEffect, useState } from "react";

const _Form = ({ createTask, taskData, editTask, editingId, setEditingId }) => {
  const [task, setTask] = useState("");

  const updateTask = useCallback((event) => {
    setTask(event.target.value);
  }, []);

  useEffect(() => {
    if (taskData.task) {
      setTask(taskData.task);
    }
  }, [taskData, updateTask]);

  function preventSubmit(event) {
    event.preventDefault();
  }

  function submit(task) {
    if (!task || task.trim() === '') {
      alert("Task can not be empty!");
    } else {
      createTask(task.trim());
      setTask("");
    }
  }

  function edit(task) {
    if (!task || task.trim() === '') {
      alert("Task can not be empty!");
    } else {
      editTask(editingId, task.trim());
      setEditingId(null);
      setTask("");
    }
  }

  return (
    <section className="w-full px-5 flex flex-col md:px-0 md:w-641px">
      <form className="w-full" onSubmit={preventSubmit}>
        <div className="flex flex-row justify-center items-center space-x-0 rounded-lg bg-white pr-2">
          <input
            type="search"
            id="search"
            className="block h-14 px-26px pt-19px pb-18px w-full placeholder:text-black placeholder:opacity-40 rounded border-none focus:outline-none focus:border-transparent focus:ring-transparent"
            placeholder="Add task..."
            value={task}
            onChange={updateTask}
          />

          <button
            type="submit"
            className="text-white text-base rounded bg-violet px-6 py-2 hover:bg-violet-800"
            onClick={() => (editingId ? edit(task) : submit(task))}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default _Form;
