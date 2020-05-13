import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

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
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
];
