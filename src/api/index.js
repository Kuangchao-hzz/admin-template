import axios from 'axios'

const Axios = axios.create({
  baseURL: '/', // 因为我本地做了反向代理
  timeout: 10000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    //'Content-Type': 'multipart/form-data'
    'Content-Type': 'application/json'
  }
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  return config
}, error => {

});

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {

  return res
}, error => {

});
