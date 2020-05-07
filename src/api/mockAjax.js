// 对axios二次封装（axios本身就是对ajax（xHR）的封装）

// 1.创建一个实例，配置基础路径和超时
// 2.拦截器中设置请求条进度
// 3.成功返回的数据设置为response.data
// 4.统一处理请求错误

import axios from "axios";
import NProgress from "nprogress"; //引入nprogress.js文件，packjson文件中配置了main：nprogress.js
import "nprogress/nprogress.css";

// 配置不显示右上角的旋转进度条, 只显示水平进度条
NProgress.configure({ showSpinner: false });

// 创建一个axios的函数（Axios功能上的实例）
const instance = axios.create({
  baseURL: "/mock",
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    // throw error;
    return Promise.reject(error);
  }
);

export default instance;
