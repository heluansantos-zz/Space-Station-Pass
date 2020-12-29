import axios from "axios";

const api = axios.create({
  baseURL: "http://api.open-notify.org",
});

export default api;