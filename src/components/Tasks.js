import Task from "./Task";

const Tasks = () => {
  return (
    <>
      {/* Tasks */}
      <div className="flex flex-col space-y-1 mt-6 px-5 md:px-0 md:w-641px">
        {/* Task */}
        <Task task={"Go to sleep"} priority={7} />
      </div>
    </>
  );
};

export default Tasks;
