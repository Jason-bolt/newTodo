import { useState } from "react";
import Tasks from "./Tasks";
import Form from "./_Form";

const Todos = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Go to sleep",
      date: "2023-03-01T01:33:58.038Z",
      priority: 7,
      isCompleted: false,
    },
    {
      id: 2,
      task: "Go for walk",
      date: "2023-03-01T07:15:27.313Z",
      priority: 0,
      isCompleted: false,
    },
  ]);

  function toggleCompleted(id) {
    // eslint-disable-next-line array-callback-return
    const currentTask = tasks.map((task) => {
      if (task.id === id) {
        const status = task.isCompleted;
        return { ...task, isCompleted: !status };
      }else{
        return task
      }
    });
    setTasks(currentTask);
  }

  return (
    <>
      <Form />
      <Tasks tasks={tasks} toggleCompleted={toggleCompleted} />
    </>
  );
};

export default Todos;
