import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:4000/api/v1/";
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1/",
  withCredentials: true,
});
axiosInstance.defaults.withCredentials = true;
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       console.log(error);
//       send request to my refresh endpoint to get another access token
//     }
//     return error;
//     Promise.reject(error)
//   }
// );

export default axios;
// const client = axios.create({
//   baseURL: "https://fashion-ecommerce-api.onrender.com/api/v1",
// });
