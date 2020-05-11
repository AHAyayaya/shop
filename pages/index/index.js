//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  handleshowToast(){
    wx.showToast({
      title: '啦啦啦',
      image: "/assets/tabbar/cart.png",
      mask: true
    })
  },
  handleshowModal(){
    wx.showModal({
      cancelColor: '#ff5777',
      title: '提示信息',
      content: '我是提示信息',
      showCancel: true, //隐藏取消按钮
      success(r){
        console.log(r)
        if(r.confirm){
          console.log('点击了确定')
        }
        if(r.cancel){
          console.log('点击了取消')
        }
      }
    })
  },
  handleshowLoading(){
    wx.showLoading({
      title: '加载中....',
      mask: true
    })
    //必须调用hideLoading才能让Loading消失
    setTimeout(() => {
      wx.hideLoading({
      })
    }, 1000);
  },
  handleshowAction(){
    wx.showActionSheet({
      itemList: ['拍照','相册'],
      itemColor: '#ff5777',
      success(r){
        console.log(r)
      }
    })
  }
})
