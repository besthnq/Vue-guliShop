//所有的接口请求函数的模块（分别暴露）,每个模块返回值是promise

import ajax from "./ajax";
import mockAjax from "./mockAjax";

/* 
请求获取3级分类列表
/api/product/getBaseCategoryList
*/
export function reqBaseCategoryList() {
  return ajax("/product/getBaseCategoryList");
}

// mocks
export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");

// /api/list 搜索商品请求函数
export const reqProductList = (searchParams) =>
  ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
//  /api/item/{ skuId }获取商品详情
export const reqProduct = (skuId) => ajax(`/item/${skuId}`);

//  /api/cart/addToCart/{ skuID }/{ skuNum }加入购物车
export const reqAddToCart = (skuId, skuNum) =>
  ajax.post(`/cart/addToCart/${skuId}/${skuNum}`);

//  /api/cart/cartList  获取购物车列表
export const reqCartList = () => ajax("/cart/cartList");
// /api/cart/checkCart/{skuID}/{isChecked}  切换商品选中状态
export const reqCheckCartItem = (skuID, isChecked) =>
  ajax(`/cart/checkCart/${skuID}/${isChecked} `);
//  /api/cart/deleteCart/{skuId}  删除购物车商品
export const reqDeleteCartItem = (skuId) =>
  ajax.delete(`/cart/deleteCart/${skuId} `);

/* 
请求登陆 POST
/api/user/passport/login
*/
export function reqLogin(mobile, password) {
  //   return ajax.post("/user/passport/login", { mobile, password });
  return ajax({
    method: "POST",
    url: "/user/passport/login",
    data: { mobile, password },
  });
}

// /api/user/passport/register 注册用户

export const reqRegister = (userInfo) =>
  ajax.post("/user/passport/register", userInfo);

//  /api/user/passport/logout  退出登录
export const reqLogout = () => ajax("/user/passport/logout");

//  /api/order/auth/{page}/{limit} 获取我的订单列表
export const reqMyOrders = (page, limit) =>
  ajax(`/order/auth/${page}/${limit}`);

//  /api/order/auth/trade  获取订单交易页信息
export const reqTradeInfo = () => ajax("/order/auth/trade");

//  /api/order/auth/submitOrder?tradeNo={tradeNo} 提交订单
export const reqSubmitOrder = (tradeNo, orderInfo) =>
  ajax({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: { tradeNo },
    data: orderInfo, //指定请求体数据对象  ==> 当前是包含订单信息
  });

//   /api/payment/weixin/createNative/{orderId}  获取订单支付信息
export const reqPayInfo = (orderId) =>
  ajax(`/payment/weixin/createNative/${orderId} `);

//   /api/payment/weixin/queryPayStatus/{orderId}  查询支付订单状态
export const reqOrderStatus = (orderId) =>
  ajax(`/payment/weixin/queryPayStatus/${orderId}`);
