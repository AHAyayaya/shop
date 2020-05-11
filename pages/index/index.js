//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad(){
    // 1.基本网络请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/recommend',
    //   success(r){
    //     console.log(r)
    //   }
    // })

    // 2.带参数的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/home/data',
    //   data:{
    //     type: "sell",
    //     page: 1
    //   },
    //   success(e){
    //     console.log(e)
    //   }
    // })

    // 3.带参数的post请求
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data:{
        name: 'Chz',
        age: 22
      },
      success(e){
        console.log(e)
      }
    })
  }
})
