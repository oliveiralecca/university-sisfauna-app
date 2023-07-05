import axios from "axios";

const api = axios.create({
  baseURL: 'https://sisfauna-api.onrender.com/api/v1',
})

export default api;
