import React from "react";
import { useTodos } from "./context/TodoContext";

const Todo = ({ id, name, isDone }) => {
  const { todos, setTodos } = useTodos();

  const isDoneHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editHandler = (id) => {
    const currTodo = todos.find((todo) => todo.id == id);
    const changeValue = prompt("What do you want to change?", currTodo.name);
    console.log(changeValue);
    if (changeValue !== null && changeValue.trim().length !== 0) {
      setTodos(
        todos.map((todo) =>
          todo.id == id ? { ...todo, name: changeValue } : todo
        )
      );
    }
  };

  return (
    <li className="flex justify-between items-center border p-3 rounded-lg">
      <div className="flex gap-2">
        <input
          type="checkbox"
          id={id}
          className=" accent-white"
          checked={isDone}
          onChange={() => isDoneHandler(id)}
        />
        <label
          htmlFor={id}
          className={`${isDone && "line-through text-gray-500"}`}>
          {name}
        </label>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editHandler(id)}
          className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition-all duration-300 active:scale-105">
          Edit
        </button>
        <button
          onClick={() => deleteHandler(id)}
          className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-300 active:scale-105">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
