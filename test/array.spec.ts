import { expect } from "chai";
import _ from "../src/main";

describe("测试 数组操作 方法", () => {
  it("测试数组平铺", () => {
    const arr1 = [1,[2,3,[4,5]],[4],0];
    const arr2 = [1,2,3,4,5,4,0];
    expect(_.arrayFlat(arr1)).to.deep.equal(arr2);
  });

});
