<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="">
                <span style="font-size: 16px; font-weight:bold">Loading动画1</span>
                <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
                <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
              </div>
              <transition name="fade">
                <div v-if="show1" class="text item cssStyle">
                  <div class="load-container">1
                    <div class="boxLoading" />
                  </div>
                </div>
              </transition>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="">
              <span style="font-size: 16px; font-weight:bold">Loading动画2</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1" class="text item cssStyle">
                <div class="loader-container">1
                  <div class="loader-child" />
                  <div class="loader-child" />
                  <div class="loader-child" />
                </div>
              </div>
            </transition>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="">
              <span style="font-size: 16px; font-weight:bold">Loading动画2</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1" class="text item cssStyle">
                <div class="loader-container">1
                  <div class="loader-child" />
                  <div class="loader-child" />
                  <div class="loader-child" />
                </div>
              </div>
            </transition>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      star1: 1.2,
      star2: 3.4,
      star3: 4.5,
      star4: 4.7
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../loading/styles/loading1.scss';
@import '../loading/styles/loading2.scss';
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.text {
  font-size: 16px;
}
.item {
  margin-bottom: 18px;
}
.right-button {
  float: right;
  font-size: 16px;
  padding: 3px 0;
}
// 卡片1展开收起的过渡
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// 卡片2
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
