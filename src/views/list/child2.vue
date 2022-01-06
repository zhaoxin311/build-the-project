// 子组件代码
<template>
  <div class="child">
    <h4>this is child component</h4>
    <p>收到来自父组件的消息：
      <slot name="child2" />  <!--展示父组件通过插槽传递的{{message}}-->
    </p>
  </div>
</template>

<style scoped lang="scss">
.child{
  width: 280px;
  height: 100px;
  padding: 0 10px;
  margin: 10px 0px;
  border: 1px solid rgb(6, 238, 238);
}
</style>
