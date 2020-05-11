//index.js
//获取应用实例
import request from "../../service/network.js"
const app = getApp()

Page({
  data: {
  },
  onLoad(){
    // 使用封装的request发送网络请求
    request({
      url:'http://152.136.185.210:8000/api/n3/recommend'
    }).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
})
