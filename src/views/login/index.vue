<template>
  <div>
    <div class="app">
      <div class="content">
        <el-form
          class="content_input"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
        >
          <div class="title">
            <p>管理员登录</p>
          </div>
          <el-form-item prop="userName">
            <el-input
              v-model="loginForm.userName"
              clearable
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              v-model="loginForm.passWord"
              clearable
              show-password
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="loginForm.code"
              clearable
              placeholder="验证码"
              style="width: 180px"
            ></el-input>
            <a><img :src="codeUrl" @click="getCode" alt="" /></a>
          </el-form-item>
          <!-- <el-form-item>
            <el-checkbox label="记住我" class="rememberMe"></el-checkbox>
          </el-form-item> -->

          <div class="content_button">
            <el-button type="primary" @click="submitForm('loginForm')"
              >登录</el-button
            >
            <el-button type="success" @click="resetForm('loginForm')"
              >重置</el-button
            >
          </div>
          <div class="tips">
            <span style="margin-right: 20px">username: admin</span>
            <span> password: any</span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { validUsername } from "@/utils/validate";
import { getCodeImg } from "@/api/login/login.js";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      codeUrl: "",
      loginForms: {
        uuid: "",
      },
      loginForm: {
        userName: "admin",
        passWord: "111111",
        code: "",
      },
      loginRules: {
        userName: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        passWord: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
    };
  },
  // watch: {
  //   $route: {
  //     handler: function (route) {
  //       this.redirect = route.query && route.query.redirect;
  //     },
  //     immediate: true,
  //   },
  // },
  created() {
    this.getCode();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: this.redirect || "/" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //获取验证码
    getCode() {
      getCodeImg().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  background: rgb(180, 240, 156);
}
.content {
  width: 500px;
  height: 400px;
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
  text-align: center;
  margin-top: 40px;
}

.el-input {
  margin-top: 10px;
  margin-bottom: 5px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #606266;
}

.el-button--primary,
.el-button--success {
  width: 40%;
}
.tips {
  font-size: 14px;
  color: rgb(197, 185, 185);
  margin-bottom: 10px;

  span {
    &:first-of-type {
      margin-right: 16px;
    }
  }
}
img {
  width: 100px;
  height: 28px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}
.rememberMe {
  color: #fff;
}
</style>
