  import axios from "axios";

  const baseUrl = "http://localhost:4000";//process.env.REACT_APP_API_URI;

  export const axiosInstance = axios.create({
    baseURL: baseUrl,
    "Content-Type": "application/json"
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
