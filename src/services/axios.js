import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    // "Content-Type": "text/plain",
  },
});

export default apiClient;
