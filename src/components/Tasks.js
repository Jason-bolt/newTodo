import { useEffect, useState } from "react";
import Task from "./Task";

const Tasks = ({
  tasks,
  toggleCompleted,
  increasePriority,
  decreasePriority,
  deleteTask,
  getTaskData
}) => {
  const [formattedTasks, setFormattedTasks] = useState(tasks);

  function dynamicSort(property) {
    var sortOrder = -1;
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  useEffect(() => {
    setFormattedTasks(tasks.sort(dynamicSort("priority")));
  }, [tasks]);

  return (
    <>
      {/* Tasks */}
      <div className="flex flex-col space-y-1 mt-6 px-5 md:px-0 md:w-641px">
        {/* Task */}
        {formattedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleCompleted={toggleCompleted}
            increasePriority={increasePriority}
            decreasePriority={decreasePriority}
            deleteTask={deleteTask}
            getTaskData={getTaskData}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
