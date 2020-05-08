<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer";
import TodayRecommend from "./TodayRecommend/TodayRecommend";
import Rank from "./Rank/Rank";
import Like from "./Like/Like";
import Floor from "./Floor/Floor";
import Brand from "./Brand/Brand";
import { reqBanners, getFloors } from "@/api";
import { mapState } from "vuex";

export default {
  name: "Home",
  mounted() {
    // 获取banners和floors数据到state中
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getFloors");
  },
  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>

<style lang="less" scoped></style>
