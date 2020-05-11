// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncreament() {
      this.triggerEvent('increament', {}, {})
    }
  }
})
