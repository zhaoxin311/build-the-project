<template>
  <div>
    <div v-for="item in list" :key="item.path">
      <el-menu-item
        v-if="
          item.hidden != true &&
          (item.children == null ||
            item.children.length < 2 ||
            item.path === '/')
        "
        :index="item.path"
      >
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-submenu
        v-if="
          item.children != null && item.children.length > 1 && item.path !== '/'
        "
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <SidebarItem :list="item.children"></SidebarItem>
      </el-submenu>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array,
    },
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
