<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="true"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      :collapse="isCollapse"
      mode="vertical"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <sidebar-item :list="routes" />
    </el-menu>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'
import Logo from './Logo.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem,
    Logo
  },
  data() {
    return {
      // isCollapse: false,
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      console.log(route)
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo
      return true
    },
    variables() {
      return variables
    },
    isCollapse() {
      // return !this.sidebar.opened
      return false
    }
  },
  created() {
    console.log(this.$router.options.routes)
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
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
