<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="true"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      mode="vertical"
      router
    >
      <SidebarItem :list="$router.options.routes"></SidebarItem>
    </el-menu>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/styles/variables.scss";
import Logo from "./Logo.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
    Logo,
  },
  computed: {
    showLogo() {
      // return this.$store.state.settings.sidebarLogo
      return true;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      // return !this.sidebar.opened
      return false;
    },
  },
  created() {
    console.log(this.$router.options.routes);
  },
  data() {
    return {
      // isCollapse: false,
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
