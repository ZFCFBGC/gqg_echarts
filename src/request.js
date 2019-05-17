import axios from "axios";
import md5 from "blueimp-md5";
import { Toast } from 'vant';
import router from './router'

// 添加post请求默认头部
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// 超时时间
axios.defaults.timeout = 10000;

// 自定义拦截器
axios.interceptors.request.use(
  config => {
    const request = JSON.stringify(config);
    const sessionid = window.localStorage.getItem("sesstion");
    if (sessionid) {
      config.headers['X-AUTH-TOKEN'] = sessionid;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    if (response.data.code === 401) {
      Toast.fail("认证失效，请重新登录！", 1000);
      console.log('确认this指向',this)
    }
    return response;
  },
  function(error) {
    if (axios.isCancel(error)) {
      throw new axios.Cancel("cancel request");
    } else {
      console.log("网络请求失败！");
      
    }
    return Promise.reject(error);
  }
);
// 路径处理函数
let filterUrl = _url => {
  console.log("判断环境", process.env.NODE_ENV);
  let baseUrl;
  if (process.env.NODE_ENV === "development") {
    console.log('进来了吗')
    baseUrl = "api";
  } else {
    baseUrl = "";
  }
  if (_url && _url.startsWith("http")) {
    return _url;
  }
  return baseUrl + _url;
};

export default {
  get(_url, _params = {}) {
    var header ={
      'Content-Type':'application/json;charset=UTF-8',
      'm': md5("m1QbuEnG6QTT7W6P" + md5(_url))
    }
    console.log('网址',filterUrl(_url))
    return new Promise((resolve, reject) => {
      axios({
        url: filterUrl(_url),
        method: "get",
        data: _params,
        headers: header
      })
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  post(_url, _params = {}) {
    var header;
    if(JSON.stringify(_params) == "{}"){
      header={
        'Content-Type':'application/json;charset=UTF-8',
        'm': md5("m1QbuEnG6QTT7W6P" + md5('/pinball/rest/'+_url))
      }
    }else{
      header={
        'Content-Type':'application/json;charset=UTF-8',
        'm': md5("m1QbuEnG6QTT7W6P" + md5(JSON.stringify(_params)))
      }
    }
    return new Promise((resolve, reject) => {
      axios({
        credentials: false,
        url: filterUrl(_url),
        method: "post",
        data: _params,
        headers: header
      }).then(res => {
          resolve(res.data);
      }).catch(error => {
          reject(error);
      });
    });
  },
};
