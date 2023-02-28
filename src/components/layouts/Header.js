import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white flex flex-row justify-between w-full h-16 items-center pt-23px pb-22px px-42px  mb-10 md:rounded-lg md:w-800px shadow-sm">
      <h1 className="text-base font-semibold">TodoApp</h1>
      <div className="flex flex-row justify-between items-center font-light space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/todos"}>Todos</Link>
      </div>
    </nav>
  );
};

export default Header;
