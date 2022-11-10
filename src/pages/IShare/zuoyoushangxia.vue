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
      <ul id="contentId" class="content">
        <li id="leftId" class="left">左</li>
        <li id="resizeOne" class="l-resize" />
        <li id="centerId" class="center">中</li>
        <li id="resizeTwo" class="l-resize" />
        <li id="rightId" class="right">右</li>
      </ul>
    </div>
    <!-- 两行上下拖动 -->
    <div class="drag-main">
      <h2>两行的上下拖动改变div大小</h2>
      <div id="mainId" class="main">
        <div id="topBoxId" class="topBox">
          中上
        </div>
        <div id="resizeId" class="r-resize" />
        <div id="downBoxId" class="downBox">
          中下
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dragTwoColDiv, dragThreeColDiv, dragTwoRowDiv } from './daxiao'
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
  display: flex;
}
#twoleft {
  width: calc(20% - 10px);
}
#tworesize {
  width: 5px;
  cursor: w-resize;
}
#tworight {
  width: 80%;
}
/* 三列 */
#contentId {
  display: flex;
}
#leftId {
  width: calc(20% - 10px);
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
  height: calc(80% - 5px);
}
#resizeId {
  height: 5px;
  cursor: s-resize;
}
#downBoxId {
  height: 20%;
}
// 辅助修饰
.all {
  padding: 30px;
  list-style: none;
}
.drag-main{
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

ul.content {
  // width:100%;
  display: flex;
  overflow: hidden;
  li {
    // float: left;
    height: 100px;
    list-style-type: none;
  }
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
