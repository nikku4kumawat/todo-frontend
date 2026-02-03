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











// import axios from "axios";

// const API_URL = "https://todo-backend-3-d35a.onrender.com/api/v1";


// const API = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
// });


// export const getTodos = async () => {
//   return axios.get(`${API_URL}/gettodos`);
// };

// export const createTodo = async (data) => {
//   return axios.post(`${API_URL}/createtodo`, data);
// };

// export const deleteTodo = async (id) => {
//   return axios.delete(`${API_URL}/deletetodo/${id}`);
// };

// export const updateTodo = async (id, data) => {
//   return axios.put(`${API_URL}/updatetodo/${id}`, data);
// };