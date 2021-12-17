/**
 * 保留任意位小数
 * @param {*} num 实际数字
 * @param {*} decimal 保留位数
 */
export function keepAnyDecimal(num, decimal) {
  const level = Math.pow(10, decimal)
  var result = parseFloat(num)
  if (isNaN(result)) {
    return ''
  }
  result = Math.round(num * level) / level
  console.log(result, 're')

  return result
}
