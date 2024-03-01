import axios from "axios";

export const getAllTodos = async (setTodo) => {
  try {
    let baseUrl = "http://localhost:5000/api/get-todos";

    let allTodo = await axios.get(baseUrl);

    setTodo(allTodo.data.data);
  } catch (error) {
    setTodo([]);
  }
};

export const createNewTodo = async (todo) => {
  try {
    let baseUrl = "http://localhost:5000/api/";

    let URL = `${baseUrl}create-todo`;

    await axios.post(URL, todo);
  } catch (error) {
    console.log(error);
  }
};

export const updateToDo = async (todo) => {
  try {
    let baseUrl = "http://localhost:5000/api/";

    let URL = `${baseUrl}update-todo/${todo.id}`;

    await axios.put(URL, todo);
  } catch (error) {
    console.log(error);
  }
};

export const deleteToDo = async (todo) => {
  try {
    let baseUrl = "http://localhost:5000/api/";

    let URL = `${baseUrl}delete-todo/${todo.id}`;

    await axios.delete(URL);
  } catch (error) {
    console.log(error);
  }
};
