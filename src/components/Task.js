import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";

const Task = ({ task, priority, dateTime }) => {
  const [dateCreated, setDateCreated] = useState("");
  const [completed, setCompleted] = useState("");
  const [checked, setChecked] = useState(false);
  const [priorityCount, setPriorityCount] = useState(priority);

  function toggleCompleted() {
    setChecked(!checked);
    setCompleted(checked ? "line-through" : "");
  }

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
      (currentDate.getTime() - new Date(dateTime).getTime()) / 1000;
    if (seconds < 60) {
      setDateCreated(`${seconds} seconds ago`);
    } else {
      let hour = new Date(dateTime).getHours();
      let minutes = new Date(dateTime).getMinutes();
      let zone = "";
      if (hour >= 12) {
        zone = "pm";
        hour %= 12;
      } else {
        zone = "am";
      }
      setDateCreated(`${hour}:${minutes} ${zone}`);
    }
  }, []);

  return (
    <div className="w-full h-72px bg-white pl-7 pr-2 py-3 rounded-lg">
      {/* content */}
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          className="rounded border-none bg-checkGray mr-4 text-checked focus:ring-transparent"
          name="completed"
          onChange={() => toggleCompleted()}
        />
        {/* Task and date */}
        <div className="flex flex-col justify-center items-start space-y-1 w-403.33px">
          <p className={`text-base leading-19.36px ${completed}`}>{task}</p>
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
