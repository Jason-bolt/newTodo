import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const Task = ({
  task,
  toggleCompleted,
  increasePriority,
  decreasePriority,
  deleteTask,
  getTaskData,
  editingId
}) => {
  const [dateCreated, setDateCreated] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editStyle, setEditStyle] = useState("text-edit")

  useEffect(() => {
    setEditStyle(editingId === task.id ? "text-green-500" : "text-edit")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingId])

  useEffect(() => {
    const currentDate = new Date();
    const seconds =
      (currentDate.getTime() - new Date(task.date).getTime()) / 1000;
    if (seconds < 60) {
      const roundedSeconds = Math.round((seconds + Number.EPSILON) * 10) / 10;
      setDateCreated(`${roundedSeconds} seconds ago`);
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
    <>
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
                `text-base leading-19.36px ` +
                (task.isCompleted === true ? "line-through" : "")
              }
            >
              {task.task}
            </p>
            <p className="text-xs opacity-50 leading-19.2px">
              Added {dateCreated}
            </p>
          </div>
          {/* Edit button */}
          <BiEdit
            className={`btn w-5 h-5 ${editStyle} mr-23.17px cursor-pointer`}
            onClick={() => {
              getTaskData(task.id);
              // setShowModal(true);
            }}
          />
          {/* Delete button */}
          <RiDeleteBin2Line
            className="text-delete w-5 h-5 hover:cursor-pointer"
            onClick={() => deleteTask(task.id)}
          />
          {/* Priority count */}
          <div className="bg-prioritybg h-11 w-12 flex justify-center items-center rounded-lg ml-7">
            {task.priority}
          </div>
          {/* Arrows */}
          <div className="flex flex-col justify-center items-center ml-1">
            {/* Arrow up */}
            <IoMdArrowDropup
              className="text-2xl text-arrow cursor-pointer"
              onClick={() => increasePriority(task.id)}
            />
            {/* Down up */}
            <IoMdArrowDropdown
              className="text-2xl text-arrow cursor-pointer"
              onClick={() => decreasePriority(task.id, task.priority)}
            />
          </div>
        </div>
      </div>

      {/* <!-- Main modal --> */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <IoMdClose
                    className="cursor-pointer float-right text-3xl"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Task;
