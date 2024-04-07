import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test.solz.me/api/v1",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-Type"] = "application/json";

  return config;
});

export default axiosInstance;
