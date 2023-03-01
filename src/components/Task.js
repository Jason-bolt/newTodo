import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const Task = () => {
  return (
    <div className="w-full h-72px bg-white pl-7 pr-2 py-3 rounded-lg">
      {/* content */}
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          className="rounded border-none bg-checkGray mr-4 text-checked focus:ring-transparent"
          name="completed"
          id="completed"
        />
        {/* Task and date */}
        <div className="flex flex-col justify-center items-start w-403.33px">
          <p className="text-base leading-19.36px">Taks number 1</p>
          <p className="text-xs opacity-50 leading-19.2px">Taks number 1</p>
        </div>
        {/* Edit button */}
        <BiEdit className="btn w-5 h-5 text-edit mr-23.17px" />
        {/* Delete button */}
        <RiDeleteBin2Line className="text-delete w-5 h-5" />
        {/* Priority count */}
        <div className="bg-prioritybg h-11 w-12 flex justify-center items-center rounded-lg ml-7">
          7
        </div>
        {/* Arrows */}
        <div className="flex flex-col justify-center items-center ml-1">
          {/* Arrow up */}
          <IoMdArrowDropup className="text-2xl text-arrow" />
          {/* Down up */}
          <IoMdArrowDropdown className="text-2xl text-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Task;
