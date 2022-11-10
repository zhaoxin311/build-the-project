<template>
  <div class="all">

    <!-- 两行上下拖动 -->
    <div class="drag-main">
      <div id="mainId" class="main">
        <div id="topBoxId" class="topBox">
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
          <h1> 中上</h1>
        </div>
        <div id="resizeId" class="r-resize" />
        <div id="downBoxId" class="downBox">
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
          <h2>下</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dragTwoRowDiv } from './daxiao'
export default {
  data() {
    return {}
  },
  mounted() {
    dragTwoRowDiv('mainId', 'topBoxId', 'resizeId', 'downBoxId')
  }
}
</script>
<style lang="scss" scoped>
/* 两横 */
#mainId {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
#topBoxId {
  height: 50%;
  overflow: scroll;
  overflow-x: hidden;
}
#resizeId {
  height: 5px;
  cursor: s-resize;
}
#downBoxId {
  overflow: scroll;
  overflow-x: hidden;
  height: 50%;
}
// 辅助修饰
.all {
  height: 88vh;
  padding: 30px;
  list-style: none;
}
.drag-main {
  height: 100%;
  margin-bottom: 30px;
}

.main {
  height: 300px;
  .topBox {
    background: #1ee3aa;
  }
  .r-resize {
    background: #000;
  }
  .downBox {
    background: #eb77eb;
  }
}
</style>
