// src/api/axiosInstance.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel backend
  withCredentials: true, // ✅ keep this false since backend doesn't support credentials
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

export default api;
