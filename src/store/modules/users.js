// 管理用户数据的模块

import { getUserTempId } from '@/utils'

export default  {
  state: {
    userInfo: {},
    userTempId: getUserTempId()  // 用户临时ID, 获取函数只执行一次
  },
  mutations: {},
  actions: {},
  getters: {},
}