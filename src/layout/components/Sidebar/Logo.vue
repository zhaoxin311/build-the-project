<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" to="/">
        <img :src="logo" class="sidebar-logo-small">
        <!-- <h1 class="sidebar-title">{{ title }}</h1> -->
      </router-link>
      <router-link v-else key="expand" to="/">
        <img :src="logo" class="sidebar-logo-big">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'Vue Admin Template',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 120px;
  // background: #2b2f3a;
  background: rgb(48, 65, 86);
  text-align: center;
  overflow: hidden;
  & .sidebar-logo-big {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    // margin-right: 12px;
  }
  & .sidebar-logo-small {
    width: 20px;
    height: 20px;
    margin-top: 20px;
    // margin-right: 12px;
  }
  & .sidebar-title {
    margin: 0;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
  }
  &.collapse {
    height: 60px;
  }
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
  text-decoration: none;
}
</style>
