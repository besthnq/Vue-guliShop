import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav/TypeNav.vue";
import store from "@/store";
import "@/mock/mockServer";
import "swiper/css/swiper.min.css";
import Carousel from "@/components/Carousel/Carousel.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import "./validate";
import * as API from "@/api";
import "./element";

Vue.prototype.$API = API; //将所有接口请求函数包装在API对象中，所有组件对象都可看到

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);
Vue.component("Pagination", Pagination);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
