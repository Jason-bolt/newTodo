import Task from "./Task";

const Tasks = () => {
  return (
    <>
      {/* Tasks */}
      <div className="flex flex-col space-y-1 mt-6 px-5 md:px-0 md:w-641px">
        {/* Task */}
        <Task task={"Go to sleep"} priority={0} dateTime={'2023-03-01T01:15:29.662Z'} />
      </div>
    </>
  );
};

export default Tasks;
