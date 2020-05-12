import { reqProductList } from "@/api";

const state = {
  productList: {},
};
const mutations = {
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};
const actions = {
  async getProductList({ commit }, searchParams) {
    // 产生一个新对象, 避免后面删除options对象
    searchParams = { ...searchParams };
    // 移除没有必要携带的空串数据
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key] === "") {
        delete searchParams[key];
      }
    });
    const result = await reqProductList(searchParams);
    if (result.code === 200) {
      const productList = result.data;
      commit("RECEIVE_PRODUCT_LIST", productList);
    }
  },
};
const getters = {
  trademarkList(state) {
    return state.productList.trademarkList || [];
  },
  attrsList(state) {
    return state.productList.attrsList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
