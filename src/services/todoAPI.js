import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

export const getTodos = async () => {
  return axios.get(`${API_URL}/gettodos`);
};

export const createTodo = async (data) => {
  return axios.post(`${API_URL}/createtodo`, data);
};

export const deleteTodo = async (id) => {
  return axios.delete(`${API_URL}/deletetodo/${id}`);
};

export const updateTodo = async (id, data) => {
  return axios.put(`${API_URL}/updatetodo/${id}`, data);
};
