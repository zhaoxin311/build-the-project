<template>
  <div class="app-wrapper">
    <Sidebar class="siderbar-container"></Sidebar>
    <div class="main-container">
      <div class="navbar-container"><Navbar></Navbar></div>

      <app-main></app-main>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
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
  .siderbar-container {
    width: 200px;
    height: 100vh;
    // min-height: 100%;
    float: left;
    background: #000;
    // border: 2px solid black;
  }
  .main-container {
    width: calc(100% - 200px);
    height: 100vh;
    float: left;
    background: red;
    // border: 2px solid red;
    // .navbar-container {
    //   height: 50px;
    //   background: yellow;
    // }
  }
}
</style>
