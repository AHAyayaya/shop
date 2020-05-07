//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  btnChoose(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res)
      // 1.取出路径
      const path = res.tempFilePaths[0]
      // 2.设置路径
      this.setData({
        imagePath: path
      })
      },
      
    })
  },
  imagefinished(){
    console.log(111111)
  }
})
