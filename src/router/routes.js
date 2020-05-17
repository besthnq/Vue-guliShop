const Search = () => import("@/pages/Search");
import Home from "@/pages/Home";
import Login from "@/pages/Login";
// import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder/MyOrder.vue";
import GroupBuy from "@/pages/Center/GroupBuy/GroupBuy.vue";

import store from "@/store";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: "search",
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.query.keyword2,
    }),
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    name: "detail",
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    // 只有携带的skuNum以及sessionStorage中有skuInfo数据, 才能查看添加购物车成功的界面
    beforeEnter: (to, from, next) => {
      const skuId = JSON.parse(window.sessionStorage.getItem("SKU_INFO_KEY"));
      const skuNum = to.query.skuNum;
      if (skuId && skuNum) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/trade",
    component: Trade,
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    props: (route) => ({ orderId: route.query.orderId }),
    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next("/trade");
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    /* 只有从支付界面, 才能跳转到支付成功的界面 */
    beforeEnter(to, from, next) {
      if (from.path === "/pay") {
        next();
      } else {
        next("/pay");
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "groupbuy",
        component: GroupBuy,
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
    /* // 只有没有登陆, 才能查看登陆界面
    beforeEnter: (to, from, next) => {
      if (!store.state.users.userInfo.token) {
        next();
      } else {
        next("/");
      }
    }, */
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
];
