//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    counter: 0
  },
  increament(){
    console.log(1111111111)
    this.setData({
      counter: this.data.counter + 1
    })
  }
})
