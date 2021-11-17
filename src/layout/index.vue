<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="navbar-container"><Navbar /></div>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/Appmain.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    width: 200px;
    height: 100vh;
    float: left;
    background: rgb(48, 65, 86);
  }
  .main-container {
    width: calc(100% - 200px);
    height: 100vh;
    float: left;
    background: rgb(88, 88, 88);
  }
}
</style>
