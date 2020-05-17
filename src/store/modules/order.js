// 订单相关数据

import { reqTradeInfo, reqPayInfo } from "@/api";

export default {
  state: {
    tradeInfo: {}, // 交易信息
    payInfo: {}, // 支付信息
  },
  mutations: {
    RECEIVE_TRADE_INFO(state, tradeInfo) {
      state.tradeInfo = tradeInfo;
    },
    RECEIVE_PAY_INFO(state, payInfo) {
      state.payInfo = payInfo;
    },
  },
  actions: {
    async getTradeInfo({ commit }) {
      const result = await reqTradeInfo();
      if (result.code === 200) {
        const tradeInfo = result.data;
        commit("RECEIVE_TRADE_INFO", tradeInfo);
      }
    },
    async getPayInfo({ commit }, orderId) {
      const result = await reqPayInfo(orderId);
      if (result.code === 200) {
        const payInfo = result.data;
        commit("RECEIVE_PAY_INFO", payInfo);
      }
    },
  },
  getters: {},
};
