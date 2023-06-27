import axios from "axios";

const api = axios.create({
  // baseURL: 'https://sisfauna-api.onrender.com/api/v1',
  baseURL: 'http://localhost:3333/api/v1',
})

export default api;

// esse arquivo é pra setar a url base da api, e não precisar ficar passando ela completa em todas as requisições, apenas os endpoints
