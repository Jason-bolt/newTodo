import { useState } from "react";
import Tasks from "./Tasks";
import Form from "./_Form";

const Todos = () => {
  const [] = useState([
    {
      task: "Go to sleep",
      date: "2023-03-01T01:33:58.038Z",
      priority: 7,
    },
  ]);
  return (
    <>
      <Form />
      <Tasks />
    </>
  );
};

export default Todos;
