<template>
  <div ref="all" class="all">
    <div class="drag-main" />
  </div>
</template>
<script>
import WaterMark from '../js/waterMark'
export default {
  data() {
    return {}
  },
  mounted() {
    WaterMark.set('水印内容', this.$refs.all)
  }
}
</script>
<style lang="scss" scoped>
.all {
  height: 70vh;
  padding: 30px;
  list-style: none;
  background: #e7ecea;
}
.drag-main {
  height: 100%;
  margin-bottom: 30px;
}
</style>
