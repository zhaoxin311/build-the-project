<template>
  <div class="main">
    <div class="simple">注意观察 box-sizing:border-box 属性得作用</div>
    <div class="fancy">注意观察有无 box-sizing:border-box 属性的差别</div>
    <hr>
    <div class="relation1">relative 表现的和 static 一样，除非你添加了一些额外的属性。</div>
    <div class="relation2">在一个相对定位（position属性的值为relative）的元素上设置 top 、 right 、 bottom 和 left 属性会使其偏离其正常位置。其他的元素的位置则不会受该元素的影响发生位置改变来弥补它偏离后剩下的空隙。</div>
    <div class="fixed">该div内容是固定在窗口的 不会随滚动滑动</div>
    <hr>
    <div class="relative">这个div元素是相对定位，它的绝对定位元素会咦她为元素定位； 如果它是 position: static; 他的绝对定位元素会跳过该元素直接以body元素直接定位
      <div class="absolute">该元素是绝对定位，相对于他的父元素定位</div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.main{
  .simple{
    width: 500px;
    margin: 20px auto;
    border: 5px solid rgb(64, 216, 33);
    box-sizing: border-box;
  }
  .fancy{
    width: 500px;
    margin: 20px auto;
    padding: 50px;
    border: 10px solid rgb(64, 216, 33);
    box-sizing: border-box;
  }
  .relation1{
    position: relative;
    height: 50px;
    border: 2px solid red;
  }
  .relation2{
    position: relative;
    width: 500px;
    height: 100px;
    left: 30px;
    top: -20px;
    background-color: #fff;
    border: 2px solid rgb(64, 216, 33);
  }
  .fixed{
    position: fixed;
    width: 240px;
    height: 50px;
    right: 15px;
    bottom: 20px;
    border: 3px solid teal;
  }
  .relative{
    position: relative;
    width: 500px;
    margin: 30px auto;
    height: 200px;
    border: 2px solid red;

  }
  .absolute{
    position: absolute;
    width: 200px;
    height: 40px;
    right: 0;
    bottom: 40px;
    border: 3px solid blueviolet;

  }
}
</style>
