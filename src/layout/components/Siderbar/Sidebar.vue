<template>
  <div>
    <el-menu
      default-active="1"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
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
  components: { SidebarItem },
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>
