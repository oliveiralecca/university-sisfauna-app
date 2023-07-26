import axios from "axios";

const api = axios.create({
  baseURL: 'https://sisfauna-api.onrender.com',
})

export default api;
