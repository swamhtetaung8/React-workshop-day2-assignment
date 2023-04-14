import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [showTodos, setShowTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      name: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowTodos(
      todos.filter((todo) =>
        todo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearch("");
  };

  const data = {
    todos,
    setTodos,
    input,
    setInput,
    handleSubmit,
    search,
    setSearch,
    showTodos,
    setShowTodos,
    handleSearch,
  };

  useEffect(() => {
    setShowTodos(todos);
  }, [todos]);

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const { todos, setTodos, showTodos, setShowTodos } = useContext(TodoContext);
  return { todos, setTodos, showTodos, setShowTodos };
};

export const useInput = () => {
  const { input, setInput, handleSubmit } = useContext(TodoContext);
  return { input, setInput, handleSubmit };
};

export const useSearch = () => {
  const { search, setSearch, handleSearch } = useContext(TodoContext);
  return { search, setSearch, handleSearch };
};
