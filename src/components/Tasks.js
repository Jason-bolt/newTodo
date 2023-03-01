import Task from "./Task";

const Tasks = ({ tasks, toggleCompleted }) => {
  return (
    <>
      {/* Tasks */}
      <div className="flex flex-col space-y-1 mt-6 px-5 md:px-0 md:w-641px">
        {/* Task */}
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleCompleted={toggleCompleted} />
        ))}
      </div>
    </>
  );
};

export default Tasks;
