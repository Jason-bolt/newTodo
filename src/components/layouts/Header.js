import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white flex flex-row justify-between w-full items-center pt-23px pb-22px px-42px md:rounded-lg md:w-800px shadow-sm">
      <h1 className="text-md font-medium">TodoApp</h1>
      <div className="flex flex-row justify-between items-center font-light space-x-5">
        <Link>Home</Link>
        <Link>Todos</Link>
      </div>
    </nav>
  );
};

export default Header;
