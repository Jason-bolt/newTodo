import { useState } from "react";
import Tasks from "./Tasks";
import Form from "./_Form";

const Todos = ({
  tasks,
  toggleCompleted,
  increasePriority,
  decreasePriority,
  createTask,
  deleteTask,
  editTask
}) => {
  const [taskData, setTaskData] = useState({});
  const [editingId, setEditingId] = useState(null)

  function getTaskData(id) {
    let foundTaskData = tasks.filter((task) => task.id === id);
    setEditingId(id)
    setTaskData({
      id: foundTaskData[0].id,
      task: foundTaskData[0].task,
    });
  }

  return (
    <>
      <Form createTask={createTask} taskData={taskData} editTask={editTask} editingId={editingId} setEditingId={setEditingId} />
      <Tasks
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        increasePriority={increasePriority}
        decreasePriority={decreasePriority}
        deleteTask={deleteTask}
        getTaskData={getTaskData}
      />
    </>
  );
};

export default Todos;
