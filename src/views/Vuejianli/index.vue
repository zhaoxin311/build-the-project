<template>
  <div class="jianli">
    <div id="code" class="styleEditor">
      <!-- <pre>{{ code }}</pre> -->
      <pre>{{ code }}</pre>
    </div>
    <div class="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" />
    <div v-html="styleCode" />
  </div>

</template>
<script>

export default {
  data() {
    return {
      code: '',
      finalCode: `
      /*
* Inspired by http://strml.net/
* 大家好，我是方方
* 二月了，好多公司都在招聘，你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
.jianli {
  color: red; background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 加点 3D 效果呗 */
.jianli{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */
      `
      // styleCode: ''
    }
  },
  // 第二种写法 styleCode 是计算出来的数据 所以可以放到计算属性computed中
  computed: {
    styleCode() {
      return '<style>' + this.code + '</style>'
    }
  },
  created() {
    // var string = '123456'
    var n = 0
    // setInterval()方法重复调用一个函数或者执行一个代码段，在每次调用之间具有固定的时间延迟。
    setInterval(() => {
      // substring()方法返回一个字符串在开始索引到结束索引之间的一个子集
      this.code = this.finalCode.substring(0, n)
      // 第一种写法
      // this.styleCode = '<style>' + this.code + '</style>'
      n += 1
    }, 20)
  }
}
</script>
<style scoped>
</style>
