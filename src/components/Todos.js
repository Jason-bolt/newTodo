import Tasks from "./Tasks";
import Form from "./_Form";

const Todos = ({tasks, toggleCompleted, increasePriority, decreasePriority, createTask, deleteTask}) => {
  
  return (
    <>
      <Form createTask={createTask} />
      <Tasks
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        increasePriority={increasePriority}
        decreasePriority={decreasePriority}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Todos;
