// 子组件代码
<template>
  <div class="child">
    <h4>this is child component</h4>
    <input v-model="message" type="text">
    <p>收到来自父组件的消息：{{ $parent.message3 }}</p>
    <button @click="showParent">调用父组件的数据和方法</button>
  </div>
</template>
<script>
export default {
  name: 'Child3',
  data() {
    return {
      message: '' // 父组件通过this.$children可以获取子组件实例的message
    }
  },
  methods: {
    showParent() {
      // 获取到所有的子组件
      console.log(this.$parent)
      // 获取指定子组件中的指定数据
      console.log(this.$parent.message2)
      // 调用子组件的方法
      this.$parent.fun()
    }
  }
}
</script>
<style scoped lang="scss">
.child{
  width: 280px;
  height: 100px;
  padding: 0 10px;
  margin: 10px 0px;
  border: 1px solid rgb(6, 238, 238);
}
</style>
