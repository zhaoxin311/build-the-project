<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="item in levelList" :key="item.path">
      <!-- 显示面包屑名称 -->
      <span
        v-if="item.redirect === 'noredirect' || index == levelList.length - 1"
        >{{ item.name }}</span
      >
      <!-- 显示前面的页面的可跳转面包屑名称 -->
      <router-link :to="item.redirect || item.path">{{
        item.name
      }}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      levelList: null,
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // this.$route.matched包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      if (first && (first.name !== "系统首页" || first.path != "")) {
        matched = [{ name: "系统首页", path: "/" }].concat(matched);
      }
      this.levelList = matched;
    },
  },
  watch: {
    // 监视$route的变化，变化就触发方法，这样面包屑的内容也会一直变化
    $route() {
      this.getBreadcrumb();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-levelbar.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
