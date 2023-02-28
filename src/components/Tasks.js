import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";

const Tasks = () => {
  return (
    <>
      {/* Tasks */}
      <div className="flex flex-col mt-6 px-5 md:px-0 md:w-641px">
        {/* Task */}
        <div className="w-full h-72px bg-white px-7 py-4 rounded">
          {/* content */}
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="rounded border-none bg-checkGray mr-4"
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
            <RiDeleteBin2Line className="text-delete w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
