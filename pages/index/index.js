//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onShareAppMessage(){
    return {
      title: 'Gxx',
      path: '/pages/index/index',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }
})
