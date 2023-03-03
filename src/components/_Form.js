import { useState } from "react";

const _Form = ({ createTask }) => {
  const [task, setTask] = useState("");

  function updateTask(event) {
    setTask(event.target.value);
  }

  function preventSubmit(event) {
    event.preventDefault();
  }

  function submit(task) {
    if (!task) {
      alert("Task can not be empty!");
    } else {
      createTask(task);
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
            required
            onChange={updateTask}
          />

          <button
            type="submit"
            className="text-white text-base rounded bg-violet px-6 py-2 hover:bg-violet-800"
            onClick={() => submit(task)}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default _Form;
