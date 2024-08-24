import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

axiosConfig.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
