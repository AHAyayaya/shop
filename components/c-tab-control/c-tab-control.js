// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      // 取出点击的index
      const index = e.currentTarget.dataset.index

      // 改变index
      this.setData({
        itemIndex: index
      })

      // 向页面内部传递点击事件
      this.triggerEvent('itemClick',{index,title:this.properties.titles[index]},{})
    }
  }
})