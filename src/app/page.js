"use client";

import { useEffect, useState } from "react";

import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import {
  getAllTodos,
  createNewTodo,
  updateToDo,
  deleteToDo,
} from "./utils/apiCalls";

export default function Home() {
  const [newTodo, setNewTodo] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [getAllTodo, setGetAllTodo] = useState([]);

  useEffect(() => {
    getAllTodos(setGetAllTodo);
  }, []);

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, todo: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) {
      await updateToDo(newTodo);
      setIsUpdating(false);
      await getAllTodos(setGetAllTodo);
    } else {
      await createNewTodo(newTodo);
      await getAllTodos(setGetAllTodo);
    }
    setNewTodo({});
  };

  const handleEdit = (todo) => {
    setNewTodo(todo);
    setIsUpdating(true);
  };

  const handleDelete = async (todo) => {
    await deleteToDo(todo);
    await getAllTodos(setGetAllTodo);
  };

  return (
    <main className="bg-fuchsia-300 h-screen overflow-scroll">
      <h2 className="text-center text-3xl font-bold py-8 underline">
        TO DO APP
      </h2>

      <TodoForm
        todo={newTodo.todo || ""}
        handleChange={handleChange}
        isUpdating={isUpdating}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={getAllTodo}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
  );
}
