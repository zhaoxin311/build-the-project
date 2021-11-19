/**
 *数字金额转文字带分割符  函数
 *
 * @export
 * @param {*} money
 * @returns
 */
export function digitUppercase(num = "") {
  //汉字版的的数字
  const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  // 基本单位
  const minUnits = ["", "拾", "佰", "仟"];
  // 对应整数部分的扩展单位
  const maxUnits = [
    "",
    "万",
    "亿",
    "兆",
    "京",
    "垓",
    "杼",
    "穰",
    "沟",
    "涧",
    "正",
    "载",
    "极",
    "恒河沙",
    "阿僧祇",
    "那由它",
    "不可思议",
    "无量",
    "大数",
    "古戈尔",
  ];
  // 对应小数部分的扩展单位
  const floatUnits = ["角", "分", "厘", "毫", "丝"];
  let money = "",
    small = "";
  let int = "",
    float = "";
  if (/\./.test(num)) {
    int = num.split(".")[0]; // 整数位
    float = num.split(".")[1].slice(0, 5); // 浮点数位，只取前 5 位

    // 处理小数部分
    // const len = float.length;
    Array(...float).forEach((val, index) => {
      if (val === "0") small += "";
      else small += digit[val] + floatUnits[index];
    });
  } else {
    int = num;
  }

  int = int.replace(/^0+/, ""); // 去掉以 '0...' 开头的数字

  const reg = /(?=(\B)(\d{4})+$)/g; // 每 4 位为一组，用 ',' 隔开
  const arr = int.replace(reg, ",").split(",");
  const len = arr.length;
  arr.forEach((item, i) => {
    let str = "";

    if (/^0000$/.test(item)) return money; // 都是 0 的情况下啥都不管

    const length = item.length;

    item = item.replace(/0+$/, ""); // 去除尾部0， 1200 -> 12

    Array(...item).forEach((val, index) => {
      if (val === "0") str += digit[val];
      // 为 0 时后面不加单位
      else str += digit[val] + minUnits[length - index - 1];
    });
    str = str.replace(/零+/, "零"); // '零零...' 替换为 '零'

    money += str + maxUnits[len - i - 1]; // 把每一项加起来
  });
  if (int == 0) {
    return small;
  }
  if (small) {
    return money + "圆" + small;
  } else {
    return money + "圆整";
  }
}
