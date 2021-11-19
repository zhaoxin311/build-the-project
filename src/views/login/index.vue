<template>
  <div>
    <div class="app">
      <div class="content">
        <div class="content_input">
          <div class="title">
            <p>管理员登录</p>
          </div>
          <el-input
            v-model="userName"
            clearable
            placeholder="用户名"
          ></el-input>
          <el-input
            v-model="passWord"
            clearable
            show-password
            placeholder="密码"
          ></el-input>
          <div class="content_button">
            <el-button type="primary" @click="SignIn">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
    SignIn() {},
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  background: rgb(180, 240, 156);
}
.content {
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  padding: 0 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(105, 105, 105, 0.07);
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: 1.5s;
}

.content_input {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content_button {
  margin-top: 10px;
}

.el-input {
  margin-bottom: 25px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #606266;
}

.el-button--primary {
  width: 100%;
}
</style>
