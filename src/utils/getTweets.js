import axios from 'axios';

const baseUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=jack"

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default (payload) => {
  return axiosInstance.get(payload);
}