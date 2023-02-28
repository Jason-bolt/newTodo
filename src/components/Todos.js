const Todos = () => {
  return (
    <section className="md:w-641px flex flex-col">
      <form className="w-full">
        <input
          type="text"
          className="form-input w-full border-none rounded-lg h-14 px-26px pt-19px pb-18px"
          placeholder="Add task..."
        />
      </form>
    </section>
  );
};

export default Todos;
