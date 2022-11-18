<template>
  <div class="all">
    <h2>方法1：js插入水印层</h2>
    <div ref="watermark1" class="watermark1" />
    <h2>方法2：自定义水印指令</h2>
    <div v-watermark="{text: '水印名称', textColor: 'rgba(180, 180, 180, 0.3)'}" class="watermark2" />
  </div>
</template>
<script>
import WaterMark from '../js/waterMark'
export default {
  data() {
    return {}
  },
  mounted() {
    WaterMark.set('水印内容', this.$refs.watermark1)
  }
}
</script>
<style lang="scss" scoped>
.all {
  height: 70vh;
  padding: 30px;
  list-style: none;
}
.watermark1 {
  height: 50%;
  border: 2px solid #701be7;
}
.watermark2 {
  height: 50%;
  margin-top: 10px;
  border: 2px solid black;
}
</style>
