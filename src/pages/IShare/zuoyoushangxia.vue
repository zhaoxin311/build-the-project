<template>
  <div class="all">
    <!-- 左右两行拖动 -->
    <div class="drag-main">
      <h2>两列的左右拖动改变div大小</h2>
      <div id="twoBox" class="drag-two-box">
        <div id="twoleft" class="drag-two-left">左</div>
        <div id="tworesize" class="drag-two-resize" />
        <div id="tworight" class="drag-two-right">右</div>
      </div>
    </div>
    <!-- 左右三行拖动 -->
    <div class="drag-main">
      <h2>三列的左右拖动改变div大小</h2>
      <div id="contentId" class="content">
        <div id="leftId" class="left">左</div>
        <div id="resizeOne" class="l-resize" />
        <div id="centerId" class="center">中</div>
        <div id="resizeTwo" class="l-resize" />
        <div id="rightId" class="right">右</div>
      </div>
    </div>
    <!-- 两行上下拖动 -->
    <div class="drag-main">
      <h2>两横的上下拖动改变div大小</h2>
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
import { dragTwoColDiv, dragThreeColDiv, dragTwoRowDiv } from '../js/daxiao'
export default {
  data() {
    return {}
  },
  mounted() {
    dragTwoColDiv('twoBox', 'twoleft', 'tworesize', 'tworight')
    dragThreeColDiv('contentId', 'leftId', 'resizeOne', 'centerId', 'resizeTwo', 'rightId')
    dragTwoRowDiv('mainId', 'topBoxId', 'resizeId', 'downBoxId')
  }
}
</script>
<style lang="scss" scoped>
/*两列 */
#twoBox {
  width: 100%;
  display: flex;
  position: relative;
}
#twoleft {
  width: 50%;
}
#tworesize {
  width: 5px;
  cursor: w-resize;
}
#tworight {
  width: 50%;
}
/* 三列 */
#contentId {
  width: 100%;
  display: flex;
  position: relative;
}
#leftId {
  width: 20%;
}
#resizeOne {
  width: 5px;
  cursor: w-resize;
}
#centerId {
  width: 60%;
}
#resizeTwo {
  width: 5px;
  cursor: w-resize;
}
#rightId {
  width: 20%;
}

/* 两横 */
#mainId {
  width: 100%;
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
  height: 50%;
  overflow: scroll;
  overflow-x: hidden;
}
// 辅助修饰
.all {
  height: 88vh;
  padding: 20px;
  list-style: none;
}
.drag-main{
  width: 1000px;
  height: 20%;
  margin-bottom: 30px;
  h2{
    margin-bottom: 30px;
  }
}
.drag-two-box {
  // width: 100%;
  display: flex;
  .drag-two-left {
    background: #1ee3aa;
    height: 100px;
  }
  .drag-two-right {
    background: #eb77eb;
  }
  .drag-two-resize {
    width: 5px;
    cursor: w-resize;
    background: #000;
  }
}

.content {
  // width:100%;
  display: flex;
  overflow: hidden;
  .left {
    background: red;
  }
  .center {
    background: #16ffa6;
    padding: 30px;
    box-sizing: border-box;
  }
  .right {
    background: orange;
  }
  .l-resize {
    background: #000;
  }
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
