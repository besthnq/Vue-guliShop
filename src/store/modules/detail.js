import { reqProduct } from "@/api";

const state = {
  detailInfo: {}, //当前商品详情信息对象
};
const mutations = {
  RECEIVE_DETAIL_INFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  },
};
const actions = {
  // 获取商品详情信息数据的异步action
  async getDetailInfo({ commit }, skuId) {
    const result = await reqProduct(skuId);
    if (result.code === 200) {
      const detailInfo = result.data;
      commit("RECEIVE_DETAIL_INFO", detailInfo);
    }
  },
};
const getters = {
  categoryView(state) {
    const categoryView = state.detailInfo.categoryView;
    return categoryView || {};
  },
  skuInfo(state) {
    const skuInfo = state.detailInfo.skuInfo;
    return skuInfo || {};
  },
  skuImageList(state) {
    const skuInfo = state.detailInfo.skuInfo;
    return skuInfo ? skuInfo.skuImageList : [];
  },
  spuSaleAttrList(state) {
    const spuSaleAttrList = state.detailInfo.spuSaleAttrList;
    return spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
