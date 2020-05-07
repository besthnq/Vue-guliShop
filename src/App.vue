<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- 如果是登录或注册页面，不显示Footer组件 -->
    <!-- <Footer v-show="$route.path !== '/login' && $route.path !== '/register'" /> -->
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { reqBaseCategoryList, reqLogin } from "@/api";
import { reqFloors } from "@/api";

export default {
  name: "App",
  // 测试
  async mounted() {
    //   const result1 = await reqBaseCategoryList();
    //   const result2 = await reqLogin("13700000000", "111111");
    //   console.log("result", result1);
    //   console.log("result", result2);
    this.$store.dispatch("getBaseCategoryList");

    const result = await reqFloors();
    console.log("mock result ", result);
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
