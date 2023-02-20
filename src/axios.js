import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://pro.alphadevteam.com/api/',
    timeout: 0,
  });

export default axiosInstance;