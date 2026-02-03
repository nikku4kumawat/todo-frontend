import { useState } from "react";
import { deleteTodo, updateTodo } from "../services/todoAPI";


const TodoItem = ({ todo, refresh }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const deleteHandler = async () => {
    await deleteTodo(todo._id);
    refresh();
  };

  const updateHandler = async () => {
    if (!title || !description) return;

    await updateTodo(todo._id, { title, description });
    setIsEdit(false);
    refresh();
  };

  return (
    <div className="todo-card">
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="btn-group">
            <button className="save-btn" onClick={updateHandler}>
              Save
            </button>
            <button
              className="cancel-btn"
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>

          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
