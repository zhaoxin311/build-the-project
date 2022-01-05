// 父组件代码
<template>
  <div class="parent">
    <div class="model-one">
      <h3>this is parent component</h3>
      <input v-model="message1" type="text">
      <p>收到来自子组件的消息：{{ messageFromChild }}</p>
      <Child :message-from-parent="message1" @on-receive="receive" />
    </div>
    <div class="model-one">
      <h3>this is parent component</h3>
      <input v-model="message2" type="text">
      <Child2>
        <template v-slot:child2>
          {{ message2 }}  <!--插槽要展示的内容-->
        </template>
      </Child2>
    </div>

  </div>
</template>
<script>
import Child from './child'
import Child2 from './child2'
export default {
  name: 'Parent',
  components: {
    Child,
    Child2
  },
  data() {
    return {
      message1: '', // 传递给子组件的消息
      message2: '', // 传递给子组件的消息
      messageFromChild: ''
    }
  },
  methods: {
    receive(msg) { // 接受子组件的信息，并将其赋值给messageFromChild
      this.messageFromChild = msg
    }
  }
}
</script>
<style scoped lang="scss">
.parent{
  display: inline-flex;

  .model-one{
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: auto 10px;
  border: 1px solid rgb(17, 219, 34);
}
}

</style>
