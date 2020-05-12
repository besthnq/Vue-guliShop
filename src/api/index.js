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
