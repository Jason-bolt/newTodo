const Todos = () => {
  return (
    <section className="md:w-641px flex flex-col">
      <form className="w-full">
        <div className="relative">
          {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div> */}
          <input
            type="search"
            id="search"
            className="block h-14 px-26px pt-19px pb-18px w-full placeholder:text-black placeholder:opacity-40 border-none rounded-lg bg-white focus:outline-none"
            placeholder="Add task..."
            required
          />

          <button
            type="submit"
            className="text-white text-base rounded absolute right-2.5 bottom-2 bg-violet hover:bg-violet-800 px-6 py-2"
          >
            Save
          </button>
        </div>

      </form>
    </section>
  );
};

export default Todos;
