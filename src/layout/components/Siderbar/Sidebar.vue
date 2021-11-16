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
      <SidebarItem></SidebarItem>
    </el-menu>
  </div>
  <!-- <div>dd</div> -->
</template>
<script>
import SidebarItem from "./SiderItem.vue";
import variables from "@/styles/variables.scss";

export default {
  name: "Sidebar",
  components: { SidebarItem },
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>
