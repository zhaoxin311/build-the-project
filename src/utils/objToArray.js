/**
 *
 * 数据字典接口返回的是对象
 * 将对象转为数组[{code: '', value: []}] 结构
 */
export function objTransArray(obj) {
  const arr = [];
  if (typeof obj !== "object") {
    return false;
  } else {
    for (const [key, value] of Object.entries(obj)) {
      arr.push({ code: key, name: value });
    }
    return arr;
  }
}
