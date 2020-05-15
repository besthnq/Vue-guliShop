// 管理用户数据的模块

import {
  getUserTempId,
  saveUserInfo,
  getUserInfo,
  removeUserInfo,
} from "@/utils";
import { reqLogin, reqRegister, reqLogout } from "@/api";

export default {
  state: {
    userInfo: getUserInfo(),
    userTempId: getUserTempId(), // 用户临时ID, 获取函数只执行一次
  },
  mutations: {
    RECEIVE_USER_INFO(state, { userInfo }) {
      state.userInfo = userInfo;
    },
    RESET_USER_INFO(state) {
      state.userInfo = {};
    },
  },
  actions: {
    async register({}, userInfo) {
      const result = await reqRegister(userInfo);
      if (result.code !== 200) {
        throw new Error(result.data || result.message || "注册失败");
      }
    },
    async login({ commit }, { mobile, password }) {
      const result = await reqLogin(mobile, password);
      if (result.code === 200) {
        const userInfo = result.data;
        saveUserInfo(userInfo);
        commit("RECEIVE_USER_INFO", { userInfo });
      } else {
        throw new Error(result.data || result.message || "注册失败");
      }
    },
    async logout({ commit }) {
      const result = await reqLogout();
      if (result.code == 200) {
        commit("RESET_USER_INFO");
        removeUserInfo();
      } else {
        throw new Error(result.data || result.message || "注册失败");
      }
    },
  },
  getters: {},
};
