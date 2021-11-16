<template>
  <div>
    <el-menu
      :default-active="$route.path"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
      router
    >
      <SidebarItem :list="$router.options.routes"></SidebarItem>
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.scss";

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>
<style scoped>
.el-menu {
  border-right: none;
}
</style>
