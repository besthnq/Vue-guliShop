import { reqProduct, reqAddToCart } from "@/api";

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
  async addToCart({ commit }, { skuId, skuNum, callback }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      // console.log("添加到购物车成功");
      callback();
    } else {
      // console.log("添加到购物车失败");
      callback("添加到购物车失败");
    }
  },
  async addToCart2({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      return "";
    } else {
      return "添加到购物车失败";
    }
  },
  async addToCart3({ commit }, { skuId, skuNum }) {
    const result = await reqAddToCart(skuId, skuNum);
    if (result.code === 200) {
      return "";
    } else {
      throw new Error("添加失败......");
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
