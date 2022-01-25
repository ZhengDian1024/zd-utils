/**
 *  @description 将金额格式化成指定格式
 *  @param {string | undefined | null | number} value - 金额数值
 *  @param {string} separator -  分隔符，默认 ,
 *  @return {string} - 格式化后的文本
 *  @version 1.0.0
 */
function formatMoney(value: string | undefined | null | number, separator = ','): string {
  const reg = /(\d)(?=(\d{3})+(?!\d))/g
  if ((value ?? '') === '') return ''
  return `${value}`.replace(reg, `$1${separator}`)
}

export default formatMoney
