/**
 *  @description 百分比转换
 *  @param {number} num - 原始值
 *  @return {string} - 格式化后的文本
 *  @version 1.0.0
 */

export default function formatPercent(num: number): string {
  return `${Math.round(num * 100 * 100) / 100}%`
}
