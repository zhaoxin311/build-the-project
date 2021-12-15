<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="">
              <span style="font-size: 16px">水平居中之margin</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1" class="text item">
                <div class="out1">
                  <div class="in1" />
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
              <span style="font-size: 16px">水平垂直居中之绝对定位</span>
              <el-button v-if="show2" type="text" class="right-button" @click="show2 = !show2"> 收起 </el-button>
              <el-button v-if="!show2" type="text" class="right-button" @click="show2 = !show2"> 展开 </el-button>
            </div>
            <transition name="slide-fade">
              <div v-if="show2" class="text item">
                <div class="out2">
                  <div class="in2" />
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
              <span style="font-size: 16px">水平垂直居中之父元素flex弹性布局</span>
              <el-button v-if="show3" type="text" class="right-button" @click="show3 = !show3"> 收起 </el-button>
              <el-button v-if="!show3" type="text" class="right-button" @click="show3 = !show3"> 展开 </el-button>
            </div>
            <transition name="fade">
              <div v-if="show3" class="text item">
                <div class="out3">
                  <div class="in3" />
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
              <span style="font-size: 16px">水平垂直居中之margin-auto法</span>
              <el-button v-if="show4" type="text" class="right-button" @click="show4 = !show4"> 收起 </el-button>
              <el-button v-if="!show4" type="text" class="right-button" @click="show4 = !show4"> 展开 </el-button>
            </div>
            <transition name="fade">
              <div v-if="show4" class="text item">
                <div class="out4">
                  <div class="in4" />
                </div>
              </div>
            </transition>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="">
              <span style="font-size: 16px; font-weight:bold">清除浮动</span><br>
              推荐使用指数：<el-rate v-model="star1" disabled show-score text-color="#ff9900" score-template="{value}分" style="display:contents" />
              <el-button v-if="show21" type="text" class="right-button" @click="show21 = !show21">收起</el-button>
              <el-button v-if="!show21" type="text" class="right-button" @click="show21 = !show21">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show21" class="text item">
                <div class="out21">
                  <div class="in21" />
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
              <span style="font-size: 16px; font-weight:bold">清除浮动</span><br>
              推荐使用指数：<el-rate v-model="star2" disabled show-score text-color="#ff9900" score-template="{value}分" style="display:contents" />

              <el-button v-if="show22" type="text" class="right-button" @click="show22 = !show22">收起</el-button>
              <el-button v-if="!show22" type="text" class="right-button" @click="show22 = !show22">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show22" class="text item">
                <div class="out22">
                  <div class="in22" />
                  <div class="clear-float" />
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
              <span style="font-size: 16px; font-weight:bold">清除浮动</span><br>
              推荐使用指数：<el-rate v-model="star3" disabled show-score text-color="#ff9900" score-template="{value}分" style="display:contents" />
              <el-button v-if="show23" type="text" class="right-button" @click="show23 = !show23">收起</el-button>
              <el-button v-if="!show23" type="text" class="right-button" @click="show23 = !show23">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show23" class="text item">
                <div class="out23">
                  <div class="in23" />
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
              <span style="font-size: 16px; font-weight:bold">清除浮动</span><br>
              推荐使用指数：<el-rate v-model="star4" disabled show-score text-color="#ff9900" score-template="{value}分" style="display:contents" />
              <el-button v-if="show24" type="text" class="right-button" @click="show24 = !show24">收起</el-button>
              <el-button v-if="!show24" type="text" class="right-button" @click="show24 = !show24">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show24" class="text item">
                <div class="out24">
                  <div class="in24" />
                </div>
              </div>
            </transition>
          </el-card>
        </div>
      </el-col>
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
      show21: false,
      show22: false,
      show23: false,
      show24: false,
      star1: 1.2,
      star2: 3.4,
      star3: 4.5,
      star4: 4.7
    }
  }
}
</script>

<style lang="scss" scoped>
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
.out1 {
  width: 200px;
  height: 200px;
  background: rgb(91, 228, 233);
  margin: 0 auto;
}
.in1 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  margin: 0 auto;
}
.out2 {
  width: 200px;
  height: 200px;
  background: rgb(91, 228, 233);
  margin: 0 auto;
  position: relative;
}
.in2 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // transform: translateX(-50%) translateY(-50%);
  // the same way
  // right: 50%;
  // bottom: 50%;
  // transform: translateX(50%) translateY(50%);
}
.out3 {
  width: 200px;
  height: 200px;
  background: rgb(91, 228, 233);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.in3 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
}
.out4 {
  width: 200px;
  height: 200px;
  background: rgb(91, 228, 233);
  margin: 0 auto;
  position: relative;
}
.in4 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.out21 {
  width: 250px;
  height: auto;
  padding: 20px;
  background: rgb(91, 228, 233);
  overflow: hidden; //不推荐使用，会导致父组件滚动失效
}
.in21 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  float: left;
}
.out22 {
  width: 250px;
  height: auto;
  padding: 20px;
  background: rgb(91, 228, 233);
}
.in22 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  float: right;
}
.clear-float {
  clear: both;
} //在最后一个 子元素 后边加一个空div

.out23 {
  width: 250px;
  height: auto;
  padding: 20px;
  background: rgb(91, 228, 233);
}
.out23::after {
  content: "";
  display: block;
  clear: both;
}
.in23 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  float: left;
}
.out24 {
  width: 250px;
  height: auto;
  padding: 20px;
  background: rgb(91, 228, 233);
  overflow: hidden;
}
.out24::after {
  content: "";
}
.in24 {
  width: 70px;
  height: 70px;
  background: rgb(188, 236, 76);
  float: right;
}
</style>
