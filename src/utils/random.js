/**
 * 产生范围随机数
 * @param min  最小值
 * @param max  最大值
 * @returns 返回随机数
 */
export function random(min, max) {
  if (arguments.length === 2) {
    // return Math.floor(min + Math.random() * (max + 1 - min));
    return Math.floor(
      parseInt(min) +
        Math.random() * (parseInt(max) + parseInt(1) - parseInt(min))
    );
  } else {
    return null;
  }
}

// Math.floor() 返回小于或等于一个给定数字的最大整数。可以理解为向下取整
// Math.random() 函数返回一个浮点数,  伪随机数在范围从0到小于1，也就是说[0,1)，从0（包括0）往上，但是不包括1（排除1）
// 2,5 ---2+ 0.5 *4
