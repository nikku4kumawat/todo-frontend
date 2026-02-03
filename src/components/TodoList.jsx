import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
