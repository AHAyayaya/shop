//从network.js导入网络请求
import request from './network.js'

//封装一个方法getMultiData导出请求的数据
export function getMultiData() {
  return request({
    url: '/api/n3/home/multidata'
  })
}

export function getGoodsData(type,page){
  return request ({
    url: '/api/n3/home/data',
    data: {
      type,
      page
    }
  })
}