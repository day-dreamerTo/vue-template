// 封装fetch方法
import axios from 'axios';
// 创建axios实例
const service = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: process.env.BASE_API,
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    return JSON.stringify(data)
  }],
  timeout: 2500000,
  withCredentials: true
});

// // request拦截器
// service.interceptors.request.use(config => {
//   if (store.getters.token) {
//     config.headers['X-Token'] = store.getters.token; // 让每个请求携带自定义token 请根据实际情况自行修改
//   }
//   return config;
// }, error => {
//   // Do something with request error
//   console.log(error); // for debug
//   Promise.reject(error);
// });

// respone拦截器
service.interceptors.response.use(
  response => {
    // const res = response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
