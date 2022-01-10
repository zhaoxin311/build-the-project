<template>
  <section class="app-main">
    <div class="app-main-con">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
      return this.$route.path
    }
  }
}
</script>
<style scoped lang="scss">
.app-main {
  min-height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;
  .app-main-con {
    margin: 15px;
    // background: #000;
    height: calc(100vh - 110px);
    overflow-x: hidden;
    border-radius: 10px;
    padding-right: 10px;
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width:8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius:10px;
  background:rgba(0,0,0,0.1);
}
// ::-webkit-scrollbar-thumb:window-inactive {
// background:rgba(255,0,0,0.4);
// }
</style>
