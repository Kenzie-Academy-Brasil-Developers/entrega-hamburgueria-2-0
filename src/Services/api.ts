import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-burguer-api.herokuapp.com/",
});

export default api;
