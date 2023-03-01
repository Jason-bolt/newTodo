import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";

const Task = ({ task, toggleCompleted }) => {
  const [dateCreated, setDateCreated] = useState("");
  const [priorityCount, setPriorityCount] = useState(task.priority);

  function increasePriority() {
    setPriorityCount(priorityCount + 1);
  }

  function decreasePriority() {
    if (priorityCount > 0) {
      setPriorityCount(priorityCount - 1);
    }
  }

  useEffect(() => {
    const currentDate = new Date();
    const seconds =
      (currentDate.getTime() - new Date(task.date).getTime()) / 1000;
    if (seconds < 60) {
      setDateCreated(`${seconds} seconds ago`);
    } else {
      let hour = new Date(task.date).getHours();
      let minutes = new Date(task.date).getMinutes();
      let zone = "";
      if (hour >= 12) {
        zone = "pm";
        hour %= 12;
      } else {
        zone = "am";
      }
      setDateCreated(`${hour}:${minutes} ${zone}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-72px bg-white pl-7 pr-2 py-3 rounded-lg">
      {/* content */}
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          className="rounded border-none bg-checkGray mr-4 text-checked focus:ring-transparent"
          name="completed"
          onChange={() => toggleCompleted(task.id)}
        />
        {/* Task and date */}
        <div className="flex flex-col justify-center items-start space-y-1 w-403.33px">
          <p
            className={
              `text-base leading-19.36px ` + (task.isCompleted === true
                ? "line-through"
                : "")
            }
          >
            {task.task}
          </p>
          <p className="text-xs opacity-50 leading-19.2px">
            Added {dateCreated}
          </p>
        </div>
        {/* Edit button */}
        <BiEdit className="btn w-5 h-5 text-edit mr-23.17px" />
        {/* Delete button */}
        <RiDeleteBin2Line className="text-delete w-5 h-5" />
        {/* Priority count */}
        <div className="bg-prioritybg h-11 w-12 flex justify-center items-center rounded-lg ml-7">
          {priorityCount}
        </div>
        {/* Arrows */}
        <div className="flex flex-col justify-center items-center ml-1">
          {/* Arrow up */}
          <IoMdArrowDropup
            className="text-2xl text-arrow cursor-pointer"
            onClick={() => increasePriority()}
          />
          {/* Down up */}
          <IoMdArrowDropdown
            className="text-2xl text-arrow cursor-pointer"
            onClick={() => decreasePriority()}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
