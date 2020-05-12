//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value: 123
  },
  jump(){
    wx.navigateTo({
      url: '/pages/test/test',
    })
  }
})
