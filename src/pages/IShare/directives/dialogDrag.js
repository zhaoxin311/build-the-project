// 自定义指令：实现element-ui中对话框dialog拖拽功能呢
import Vue from 'vue'

// v-dialogDrag:弹窗拖拽
Vue.directive('dialogDrag', {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog') // el-dialog，el-dialog__header，el-dialog__footer
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderEl.style.cursor = 'move'

    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    dialogHeaderEl.onmousedown = (e) => {
      const disX = e.clientX
      const disY = e.clientY

      let styL, styT

      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
      } else {
        styL = +sty.left.replace(/\px/g, '')
        styT = +sty.top.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        const l = e.clientX - disX
        const t = e.clientY - disY

        dragDom.style.left = `${l + styL}px`
        dragDom.style.top = `${t + styT}px`
      }

      document.onmouseup = function(e) {
        //  鼠标弹起，移除鼠标移动事件
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})
