//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    titles:['Gxx','Chz']
  },
  btnClick(){
    console.log(11111)
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongpress(){
    console.log('handleLongpress')
  },
  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleCaptureView2(){
    console.log('handleCaptureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  handleCaptureView3(){
    console.log('handleCaptureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
  }
})
