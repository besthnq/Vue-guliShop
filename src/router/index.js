import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果传递了成功或失败的promise回调函数，用原来的方法执行
  if (onComplete || onAbort) {
    originPush.call(this, location, onComplete, onAbort);
  } else {
    return originPush.call(this, location).catch((error) => {
      return new Promise(() => {}); // 返回一个pending状态的promise, 中断promise链, 后面成功的回调就不会调用
    });
  }
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete || onAbort) {
    originReplace.call(this, location, onComplete, onAbort);
  } else {
    return originReplace.call(this, location).catch(() => {
      return new Promise(() => {});
    });
  }
};

export default new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; //路由跳转时，滚动条自动滚动到起始位置
  },
});
