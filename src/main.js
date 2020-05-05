import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav/TypeNav.vue";
import store from "@/store";

Vue.config.productionTip = false;
Vue.component("TypeNav", TypeNav);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
