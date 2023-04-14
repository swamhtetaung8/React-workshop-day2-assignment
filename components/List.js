import React from "react";
import { useTodos } from "./context/TodoContext";
import Todo from "./Todo";

const List = () => {
  const { todos, showTodos } = useTodos();
  return (
    <div>
      <div className="mb-5 flex justify-between flex-col lg:flex-row items-start gap-5 lg:gap-0 lg:items-center">
        <h1 className="  text-xl uppercase font-medium inline-block pb-2 border-b-4 ">
          Your Todos
        </h1>
        {showTodos.length > 0 && (
          <div className="flex gap-3 text-xl font-light">
            <p>
              Total :{" "}
              <span className="bg-white text-black px-3 rounded-md">
                {showTodos.length}
              </span>
            </p>
            <p>
              Done :{" "}
              <span className="bg-green-500 text-white px-3 rounded-md">
                {showTodos.filter((todo) => todo.isDone == true).length}
              </span>
            </p>
          </div>
        )}
      </div>
      {showTodos.length === 0 && (
        <p className="text-gray-500">
          {" "}
          - Your todo list is empty, add some to see.
        </p>
      )}
      <ul className="space-y-5">
        {showTodos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default List;
