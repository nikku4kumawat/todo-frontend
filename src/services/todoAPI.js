import axios from "axios";

const API = axios.create({
  baseURL: "https://todo-backend-3-d35a.onrender.com/api/v1",
});

// GET all todos
export const getTodos = () => {
  return API.get("/gettodos");
};

// CREATE todo
export const createTodo = (data) => {
  return API.post("/createtodo", data);
};

// DELETE todo
export const deleteTodo = (id) => {
  return API.delete(`/deletetodo/${id}`);
};

// UPDATE todo
export const updateTodo = (id, data) => {
  return API.put(`/updatetodo/${id}`, data);
};

export default API;









