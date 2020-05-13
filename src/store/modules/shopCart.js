import {
  reqCartList,
  reqCheckCartItem,
  reqAddToCart,
  reqDeleteCartItem,
} from "@/api";

export default {
  state: {
    cartList: [],
  },
  mutations: {
    RECEIVE_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
  },
  actions: {
    //   获取购物车列表数据
    async getCartList({ commit }) {
      const result = await reqCartList();
      if (result.code === 200) {
        const cartList = result.data;
        commit("RECEIVE_CART_LIST", cartList);
      }
    },
    // 改变勾选状态
    async checkCartItem({ commit }, { skuId, isChecked }) {
      const result = await reqCheckCartItem(skuId, isChecked);
      if (result.code !== 200) {
        throw new Error(result.message || "修改勾选状态操作成功");
      }
    },
    // 全选或全不选
    async checkAllCartItem({ state, dispatch }, checked) {
      const isChecked = checked ? 1 : 0;
      const promises = [];
      state.cartList.forEach((item) => {
        if (item.isChecked === isChecked) return;
        const skuId = item.skuId;
        const promise = dispatch("checkCartItem", { skuId, isChecked });
        promises.push(promise);
      });
      return Promise.all(promises);
    },
    // 删除商品项
    async deleteCartItem({}, skuId) {
      const result = await reqDeleteCartItem(skuId);
      if (result.code !== 200) {
        throw new Error("出错了");
      }
    },
    // 删除选中商品
    async delCheckedItem({ state, dispatch }) {
      const promises = [];
      state.cartList.forEach((item) => {
        if (!item.isChecked) return;
        const skuId = item.skuId;
        const promise = dispatch("deleteCartItem", skuId);
        promises.push(promise);
      });
      return Promise.all(promises);
    },
    //购物车数量增减
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
    async addToCart3({}, { skuId, skuNum }) {
      const result = await reqAddToCart(skuId, skuNum);
      if (result.code !== 200) {
        throw new Error("添加失败......");
      }
    },
  },

  getters: {
    // 总商品数
    totalCount(state) {
      /* return state.cartList.reduce((pre, item) => {
        return item.isChecked === 1 ? pre + item.skuNum : pre;
      }, 0); */
      let total = 0;
      state.cartList.forEach((item) => {
        const { isChecked, skuNum } = item;
        if (isChecked === 1) {
          total += skuNum;
        }
      });
      return total;
    },

    // 总价格
    totalPrice(state) {
      /*  return state.cartList.reduce((pre, item) => {
        return item.isChecked === 1 ? pre + item.skuNum * item.cartPrice : pre;
      }, 0); */
      let total = 0;
      state.cartList.forEach((item) => {
        const { isChecked, cartPrice, skuNum } = item;
        if (isChecked === 1) {
          total += cartPrice * skuNum;
        }
      });
      return total;
    },
  },
};
