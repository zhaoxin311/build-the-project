<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="navbar-container"><Navbar /></div>
      <!-- <div class="tags-view-container"><TagsView /></div> -->
      <div class="app-main-style"><app-main></app-main></div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import AppMain from "./components/Appmain.vue";
// import TagsView from "./components/TagsView/index.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    // TagsView,
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
    // width: 200px;
    height: 100vh;
    float: left;
    background: rgb(48, 65, 86);
  }
  .main-container {
    width: calc(100% - 200px);
    height: 100vh;
    float: left;
    background: #eff0f5;
    .tags-view-container {
      height: 30px;
      background: #fff;
    }
    .app-main-style {
      width: calc(100% - 30px);
      background: #fff;
      margin: 10px 15px;
      border-radius: 10px;
    }
  }
}
</style>
