const _Form = () => {
  return (
    <section className="w-full px-5 flex flex-col md:px-0 md:w-641px">
      <form className="w-full">
        <div className="relative">
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

export default _Form;
