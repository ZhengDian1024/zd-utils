/**
 *  将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *  @param {Array}   arr - 需要处理的数组
 *  @return {Array} - 返回一个包含拆分区块的新数组（相当于一个二维数组）。
 *  @version 1.0.0
 */
function arrayFlat(arr: any[]) {
  let temp: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Object.prototype.toString.call(item).slice(8, -1) === "Array") {
      temp = temp.concat(arrayFlat(item));
    } else {
      temp.push(item);
    }
  }
  return temp;
}

export default arrayFlat
