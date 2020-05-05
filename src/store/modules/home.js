import { reqBaseCategoryList } from "@/api";

export default {
  state: {
    baseCategoryList: [],
  },
  mutations: {
    RECEIVE_BASE_CAREGORY_LIST(state, baseCategoryList) {
      state.baseCategoryList = baseCategoryList;
    },
  },
  actions: {
    // 获取分类列表的异步action
    async getBaseCategoryList({ commit }) {
      const result = await reqBaseCategoryList();
      if (result.code === 200) {
        const baseCategoryList = result.data;
        commit("RECEIVE_BASE_CAREGORY_LIST", baseCategoryList);
      }
    },
  },

  getters: {},
};
