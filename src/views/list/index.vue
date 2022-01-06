<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="">
                <span style="font-size: 16px; font-weight:bold">Vue组件通信方式之 1.props/$emit</span>
                <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
                <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
              </div>
              <transition name="fade">
                <div v-if="show1">
                  <div class="model-one">
                    <h4>this is parent component</h4>
                    <input v-model="message1" type="text">
                    <p>收到来自子组件的消息：{{ messageFromChild }}</p>
                    <Child :message-from-parent="message1" @on-receive="receive" />
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
              <span style="font-size: 16px; font-weight:bold">Vue组件通信方式之 2.v-slot</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1">
                <div class="model-one">
                  <h4>this is parent component</h4>
                  <input v-model="message2" type="text">
                  <Child2>
                    <template v-slot:child2>
                      {{ message2 }}  <!--插槽要展示的内容-->
                    </template>
                  </Child2>
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
              <span style="font-size: 16px; font-weight:bold">Vue组件通信方式之2</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1">
                <div class="model-one">
                  <h4>this is parent component</h4>
                  <input v-model="message3" type="text">
                  <Child3 />
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
              <span style="font-size: 16px; font-weight:bold">Vue组件通信方式之2</span>
              <el-button v-if="show1" type="text" class="right-button" @click="show1 = !show1">收起</el-button>
              <el-button v-if="!show1" type="text" class="right-button" @click="show1 = !show1">展开</el-button>
            </div>
            <transition name="fade">
              <div v-if="show1">
                33
              </div>
            </transition>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Child from './child'
import Child2 from './child2'
import Child3 from './child3'
export default {
  name: 'Parent',
  components: {
    Child, Child2, Child3
  },
  data() {
    return {
      message1: '11111', // 传递给子组件的消息
      message2: '333333', // 传递给子组件的消息
      message3: '22', // 传递给子组件的消息
      messageFromChild: '',

      show1: false,
      show2: false,
      show3: false,
      show4: false
    }
  },
  methods: {
    receive(msg) { // 接受子组件的信息，并将其赋值给messageFromChild
      this.messageFromChild = msg
    },
    fun() {
      console.log('parent fun')
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

.model-one{
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: auto 10px;
  border: 1px solid rgb(17, 219, 34);
}
</style>
