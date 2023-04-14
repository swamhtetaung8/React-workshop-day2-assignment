import React from "react";
import { useInput } from "./context/TodoContext";

const Form = () => {
  const { input, setInput, handleSubmit } = useInput();
  return (
    <form className="flex " onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-white p-2 rounded-l-md"
        required
        placeholder="Add todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className=" bg-white text-black block px-3 rounded-r-md">
        Add
      </button>
    </form>
  );
};

export default Form;
