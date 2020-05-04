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
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
