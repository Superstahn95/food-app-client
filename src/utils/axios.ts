import axios from "axios";

//to be changed to production based backend url
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1/",
});

export default axiosInstance;
