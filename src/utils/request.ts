import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
const instance: AxiosInstance = axios.create({
  /** 如果是使用的CORS处理跨域，这里应该设置为  http://127.0.0.1:81 */
  /** 我们这里使用的是Proxy处理跨域，所以设置为 /api 来匹配跨域规则即可  */
  baseURL: "/api",
  timeout: 5000,
  headers: {
    // 'Content-Type': 'application/json',
    Authorization: "token" /** 假设一下 ，假的，没用 */,
  },
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  // transformRequest: [function (data) {
  //   // 对 data 进行任意转换处理
  //   return Qs.stringify(data);
  // }],
});

//你可以放心的进行全局配置 ，非常方便，为后续完善项目做准备

// 添加请求拦截器
instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response: AxiosResponse) {
    // 对响应数据做点什么 
    console.log('interceptors', response.data);
    return response;
  },
  function (error: AxiosError) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
