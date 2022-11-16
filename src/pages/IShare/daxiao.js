// 两列拖动改变两列宽度
export function dragTwoColDiv(contentId, leftBoxId, resizeId, rightBoxId) {
  const resize = document.getElementById(resizeId)
  const leftBox = document.getElementById(leftBoxId)
  const rightBox = document.getElementById(rightBoxId)
  const box = document.getElementById(contentId)
  resize.onmousedown = function(e) {
    const startX = e.clientX // 被触发时鼠标指针的水平坐标
    resize.left = resize.offsetLeft //
    document.onmousemove = function(e) {
      const endX = e.clientX
      let moveLen = resize.left + (endX - startX)
      const maxT = box.clientWidth - resize.offsetWidth
      if (moveLen < 150) moveLen = 150
      if (moveLen > maxT - 150) moveLen = maxT - 150
      resize.style.left = moveLen
      leftBox.style.width = moveLen + 'px'
      rightBox.style.width = (box.clientWidth - moveLen - 5) + 'px'
    }
    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
      resize.releaseCapture && resize.releaseCapture()
    }
    resize.setCapture && resize.setCapture()
    return false
  }
}
// 三列拖动改变div宽度
export function dragThreeColDiv(contentId, leftBoxId, resizeOne, centerBoxId, resizeTwo, rightBoxId) {
  const resizeO = document.getElementById(resizeOne)
  const resizeT = document.getElementById(resizeTwo)
  const leftBox = document.getElementById(leftBoxId)
  const rightBox = document.getElementById(rightBoxId)
  const centerBox = document.getElementById(centerBoxId)
  const box = document.getElementById(contentId)
  resizeO.onmousedown = function(e) {
    const startX = e.clientX
    resizeO.left = resizeO.offsetLeft
    document.onmousemove = function(e) {
      const endX = e.clientX
      const rightW = rightBox.offsetWidth
      let moveLen = resizeO.left + (endX - startX)
      const maxT = box.clientWidth - resizeO.offsetWidth
      if (moveLen < 150) moveLen = 150
      if (moveLen > maxT - rightW - 150) moveLen = maxT - rightW - 150
      resizeO.style.left = moveLen
      leftBox.style.width = moveLen + 'px'
      centerBox.style.width = (box.clientWidth - moveLen - rightW - 10) + 'px'
    }
    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
      resizeO.releaseCapture && resizeO.releaseCapture()
    }
    resizeO.setCapture && resizeO.setCapture()
    return false
  }
  resizeT.onmousedown = function(e) {
    const startX = e.clientX
    resizeT.left = resizeT.offsetLeft
    document.onmousemove = function(e) {
      const endX = e.clientX
      const leftW = leftBox.offsetWidth
      let moveLen = resizeT.left + (endX - startX) - leftW
      const maxT = box.clientWidth - resizeT.offsetWidth - 5
      if (moveLen < 150) moveLen = 150
      if (moveLen > maxT - leftW - 150) moveLen = maxT - leftW - 150
      resizeT.style.left = moveLen
      centerBox.style.width = moveLen + 'px'
      rightBox.style.width = (box.clientWidth - moveLen - leftW - 10) + 'px'
    }
    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
      resizeT.releaseCapture && resizeT.releaseCapture()
    }
    resizeT.setCapture && resizeT.setCapture()
    return false
  }
}
// 上下拖动改变上下两个模块的高度
export function dragTwoRowDiv(mainId, topBoxId, resizeId, downBoxId) {
  const resize = document.getElementById(resizeId)
  const topBox = document.getElementById(topBoxId)
  const downBox = document.getElementById(downBoxId)
  const box = document.getElementById(mainId)
  resize.onmousedown = function(e) {
    const startY = e.clientY
    resize.top = resize.offsetTop
    document.onmousemove = function(e) {
      const endY = e.clientY
      let moveLen = resize.top + (endY - startY)
      const maxT = box.clientHeight - resize.offsetHeight
      if (moveLen < 100) moveLen = 100
      if (moveLen > maxT - 100) moveLen = maxT - 100
      resize.style.top = moveLen
      topBox.style.height = moveLen + 'px'
      downBox.style.height = (box.clientHeight - moveLen - 5) + 'px'
    }
    document.onmouseup = function() {
      document.onmousemove = null
      document.onmouseup = null
      resize.releaseCapture && resize.releaseCapture()
    }
    resize.setCapture && resize.setCapture()
    return false
  }
}
