import { useEffect, useState } from "react";
import { getTodos } from "../services/todoAPI";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import "../styles/todo.css";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data.data); //backend data access kore data property diye
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>📝 Todo App</h1>
      <TodoForm refresh={fetchTodos} />

      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} refresh={fetchTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
