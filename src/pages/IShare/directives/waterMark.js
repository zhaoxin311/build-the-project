
import Vue from 'vue'

// 自定义水印指令
Vue.directive('watermark', (el, binding) => {
  function addWaterMarker(str, parentNode, font, textColor) { // 水印文字，父元素，字体，文字颜色
    const img = document.createElement('canvas') // 创建canvas元素
    parentNode.appendChild(img)
    img.width = 100
    img.height = 100
    img.style.zIndex = '999'
    // img.style.display = 'none';
    const image = img.getContext('2d') // 获取canvas画布
    image.rotate(-25 * Math.PI / 180) // 逆时针旋转π/9
    image.globalAlpha = 1 // 透明度
    image.str = str || '自定义水印指令'
    image.font = font || '12px Microsoft Yauheni '
    image.fillStyle = textColor || 'rgba(180, 180, 180, 0.2)'
    image.textAlign = 'left'
    // image.textBaseline = 'Middle';
    image.fillText(str, 0, 50)
    parentNode.style.backgroundImage = 'url(' + img.toDataURL('image/png') + ')'
  }
  addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
})
