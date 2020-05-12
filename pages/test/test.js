// pages/test/test.js
Page({
  onLoad(o){
    console.log(o)
  },
  onUnload(){
    // getCurrentPage 当前所有活跃的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    // 调用页面对象的setData
    home.setData({
      value: 456
    })
  },
  back(){
    wx.navigateBack({
      data: 1
    })
  }
})