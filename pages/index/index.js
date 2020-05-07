//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  input(event){
    console.log('input输入内容',event)
  },
  focus(event){
    console.log('input获取焦点',event)
  },
  blur(event){
    console.log('input失去焦点',event)
  }
})
