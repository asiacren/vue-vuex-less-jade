// import qs from 'qs'
import axios from 'axios'

const http = axios.create({
  timeout: 1000 * 10,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8' // 'application/x-www-form-urlencoded'
  }
})

http.interceptors.request.use(config => {
  // console.log('interceptors.request:::', config)
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(config => {
  // console.log('interceptors.response:::', config)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * @param {*} obj 为axios配置参数
 */
http.fetch = (obj) => {
  return Promise.resolve(http({
    params: obj.params,
    url: obj.url,
    method: obj.method || 'POST',
    data: JSON.stringify(obj.data)
  }))
}

export function $http (obj) {
  return new Promise((resolve) => {
    http.fetch(obj).then((data) => {
      resolve(data.data)
    })
  })
}
