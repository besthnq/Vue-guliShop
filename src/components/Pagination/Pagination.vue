<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <button disabled v-if="startEnd.start > 2">···</button>

    <button
      v-for="num in startEnd.end"
      :key="num"
      v-if="num >= startEnd.start"
      :class="{ active: num === myCurrentPage }"
      @click="setCurrentPage(num)"
    >
      {{ num }}
    </button>

    <button disabled v-if="startEnd.end < totalPage - 1">···</button>
    <button v-if="startEnd.end < totalPage" @click="setCurrentPage(totalPage)">
      {{ totalPage }}
    </button>
    <button
      :disabled="myCurrentPage === totalPage"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页数量
    pageSize: {
      type: Number,
      default: 5,
    },
    // 总页数
    total: {
      type: Number,
      default: 0,
    },
    // 连续数码数
    showPageNo: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      // 组件当前页码初始值为外部传入的传入的当前页码值
      myCurrentPage: this.currentPage,
    };
  },
  watch: {
    currentPage(value) {
      this.myCurrentPage = value;
    },
  },
  computed: {
    //   计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续页码的start和end值
    startEnd() {
      let start, end;
      const { myCurrentPage, showPageNo, totalPage } = this;

      /* 
        myCurrentPage,  showPageNo,  totalPages
            4               5             8            23[4]56
            2               5             8            1[2]345
            7               5             8            456[7]8
            3               5             4             12[3]4
     */

      start = myCurrentPage - Math.floor(showPageNo / 2);
      end = myCurrentPage + Math.floor(showPageNo / 2);

      if (start < 1) {
        start = 1;
        end = start + showPageNo - 1;
      }

      if (end > totalPage) {
        end = totalPage;
        start = end - showPageNo + 1;
        if (start < 1) {
          start = 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    setCurrentPage(currentPage) {
      this.myCurrentPage = currentPage;
      this.$emit("currentChange", currentPage);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
