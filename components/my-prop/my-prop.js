// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是默认的标题',
      //监听新旧值
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  // 接受外部传递的样式类
    externalClasses: ['titleclass']
})
