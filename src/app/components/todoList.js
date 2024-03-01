import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div className="">
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div className="flex justify-between bg-red-600 max-w-[400px] mx-auto p-4 mt-4 rounded text-white" key={todo.id}>
              <div key={todo.id} className="">
                {todo.todo}
              </div>
              <div className="flex justify-between w-12 text-xl">
                <FaEdit
                  className="cursor-pointer"
                  onClick={() => handleEdit(todo)}
                />
                <MdOutlineDelete
                  className="cursor-pointer"
                  onClick={() => handleDelete(todo)}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
