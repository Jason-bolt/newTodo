import hero from "../hero-illustration.svg";
import Button from "./_Button";

const Home = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center mt-10 md:flex-row md:justify-between md:w-800px">
      <div className="bottom w-333px flex-col">
        <h1 className="text-40px font-semibold leading-48.41px">
          Manage your tasks effectively
        </h1>
        <p className="text-base leading-25.6px mt-3 font-body">
          Modern todo list application to help you track your activities and
          stay productive.
        </p>
        <Button />
      </div>
      <img className="top w-347px h-347px" src={hero} alt="Add task" />
    </div>
  );
};

export default Home;
