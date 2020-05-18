// 从config.js导入前缀
import {
  baseURL
} from './config.js'

//封装网络请求
export default function(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'GET', //请求类型
      data: options.data || {}, //拿到数据
      success: resolve, //成功回调
      fail: reject //失败回调
    })
  })
}