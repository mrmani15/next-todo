const TodoForm = ({ todo, handleChange, isUpdating, handleSubmit }) => {
  return (
    <form className="flex justify-center mb-8" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Add your todo"
          className="p-3 mr-2 w-[320px] text-black outline-none border-none"
        />
        <button
          type="submit"
          className="px-4 bg-red-600 font-bold uppercase  text-white"
        >
          {isUpdating ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
