/**
 * 元素为对象的数组根据元素对象某个属性排序
 * @param arr  原数组
 * @param prop  原数组的元素的某个属性
 * @param orderByType  按倒序还是顺序
 * @returns {Array} 返回排好序的数组
 */
export function arrayObjSort(arr, prop, orderByType) {
  return arr.sort(compare(prop, orderByType))
}
function compare(prop, orderByType) {
  return function(obj1, obj2) {
    var val1 = obj1[prop]
    var val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    switch (orderByType) {
      // 倒序
      case 'desc':
        if (val1 > val2) {
          return -1
        } else if (val1 < val2) {
          return 1
        } else {
          return 0
        }
      // 升序
      case 'asc':
        if (val1 < val2) {
          return -1
        } else if (val1 > val2) {
          return 1
        } else {
          return 0
        }
    }
  }
}
