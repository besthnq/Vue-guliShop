import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav/TypeNav.vue";
import store from "@/store";
import "@/mock/mockServer";
import "swiper/css/swiper.min.css";
import Carousel from "@/components/Carousel/Carousel.vue";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
