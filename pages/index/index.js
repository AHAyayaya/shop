//index.js
//导入index.js里的请求数据的getMultiData方法
import {
  getMultiData,getGoodsData
} from '../../service/index.js'

//获取应用实例
const app = getApp()
const types = ['pop','new','sell']
const BackTop = 600

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods:{
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: 'pop',
    showBackTop: false,
    TabFixed: false
  },
  onLoad(options){
    // 1.请求轮播图数据和推荐数据
    this._getMultidata()
    //2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },


    //------------------------------- 网络请求函数 ----------------------------------
    // 轮播图数据
  _getMultidata(){
    getMultiData().then(res => {

      //取出数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },

  // tab-control数据
  _getGoodsData(type){
    //1.获取页码
    const page = this.data.goods[type].page + 1;
    //2.发送网络请求
    getGoodsData(type,page).then(res =>{
    //2.1.取出数据
    const list = res.data.data.list;

    //2.2.将数据设置到对应type的list中
    const oldList = this.data.goods[type].list
    oldList.push(...list)

    //2.3.将数据设置到data的goods中
    const typeKey = `goods.${type}.list`;
    const pageKey = `goods.${type}.page`
    this.setData({
      [typeKey]: oldList,
      [pageKey]: page
      })
    })
  },

  //------------------------------- 事件监听函数 ----------------------------------
  TabClick(e){
    const index = e.detail.index
    this.setData({
      currentType: types[index]
    })
  },
  onReachBottom(){
    //上拉加载
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    // 1.拿到页面距顶部的距离，scrollTop
    const scollTop = options.scrollTop

    // 2.改变showBackTop属性，显示
    this.setData({
      showBackTop: scollTop >= BackTop
    })
  },
  ImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      console.log(rect)
      console.log(1111)
    }).exec
  }
})
