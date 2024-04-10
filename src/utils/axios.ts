import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1/",
});

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

export default axiosInstance;
