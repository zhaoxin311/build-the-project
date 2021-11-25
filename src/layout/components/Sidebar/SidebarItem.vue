<template>
  <div>
    <div v-for="item in list" :key="item.path">
      <el-menu-item
        v-if="
          item.hidden != true &&
          (item.children == null ||
            item.children.length < 2 ||
            item.path === '/home')
        "
        :index="item.path"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <el-submenu
        v-if="
          item.children != null &&
          item.children.length > 1 &&
          item.path !== '/home'
        "
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <SidebarItem :list="item.children" class="item2color"></SidebarItem>
      </el-submenu>
    </div>
  </div>
</template>
<script>
import listData from "./router";
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
  created() {
    // console.log(this.listData, "data");
  },
  data() {
    return {
      listData: listData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
