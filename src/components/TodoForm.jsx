import { useState } from "react";
import { createTodo } from "../services/todoAPI";

const TodoForm = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !description) return;

    await createTodo({ title, description });
    setTitle("");
    setDescription("");
    refresh();
  };

  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
