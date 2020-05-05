//所有的接口请求函数的模块（分别暴露）,每个模块返回值是promise

import ajax from "./ajax";

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
