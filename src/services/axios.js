import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "text/plain",
  },
});

export default apiClient;
