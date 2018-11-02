import axios from 'axios'
import { Message } from 'iview';
import $i18n from '../i18n'

const Axios = axios.create({
  baseURL: '/', // 因为我本地做了反向代理
  timeout: 10000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    //'Content-Type': 'multipart/form-data'
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  const AUTH_TOKEN = localStorage.getItem('Token');
  if (AUTH_TOKEN && (config.url.indexOf('/login') == -1)) {
    config.headers.AccessToken = AUTH_TOKEN
    // config.headers.sign = encryptedHex
    //  config.headers.time = time
  }
  return config
}, error => {

});

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
  const datastatus = res.status;
  if (datastatus != '200') {
    Message.error($i18n.messages[$i18n.locale].message[res.data.status]);
    return false
  } else {
    // 将token 存在本地，如果过去则返回登录页
    if (res.config.url.indexOf('/login') > -1) {
      localStorage.setItem('Token', res.data.data)
    }
  }
  return res.data
}, error => {

});

export default Axios
