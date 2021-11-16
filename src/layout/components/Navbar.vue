<template>
  <div class="navbar">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../assets/bell.gif" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <!-- <span>下拉菜单</span> -->
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> Home </el-dropdown-item>
          </router-link>
          <router-link to="/menu1">
            <el-dropdown-item>Github</el-dropdown-item>
          </router-link>
          <a target="_blank" href="">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";
export default {
  data() {
    return {};
  },
  components: {
    Hamburger,
    Breadcrumb,
  },
  methods: {
    toggleSideBar() {
      // 父组件调用 vuex 改变state.sidebar.opened 的值
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  // 阴影水平 垂直 偏移，阴影模糊值。R B G 透明度
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    //过渡效果：鼠标悬停时background改变，改变时间为 0.3s
    transition: background 0.3s;
    // 给所有元素设置禁止点击按钮或链接的高亮背景
    -webkit-tap-highlight-color: transparent;
    // border: 2px solid yellow;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    // border: 2px solid red;
    &:focus {
      outline: none;
    }

    // .right-menu-item {
    //   display: inline-block;
    //   padding: 0 8px;
    //   height: 100%;
    //   font-size: 18px;
    //   color: #5a5e66;
    //   vertical-align: text-bottom;

    //   &.hover-effect {
    //     cursor: pointer;
    //     transition: background 0.3s;

    //     &:hover {
    //       background: red;
    //     }
    //   }
    // }

    .avatar-container {
      margin-right: 30px;
      // border: 2px solid #000;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 15px;
        }
      }
    }
  }
}
.el-dropdown-menu a {
  text-decoration: none;
}
</style>
