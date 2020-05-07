//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShow: true,
    score: 98,
    nowdate: new Date().toLocaleString()
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowdate: new Date().toLocaleString()
      })
    },1000)
  },
  btnshow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  increament(){
    this.setData({
      score: this.data.score +5
    })
  },
  decreament(){
    this.setData({
      score: this.data.score -5
    })
  }
})
