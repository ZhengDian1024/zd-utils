import { expect } from "chai";
import _ from "../src/main";

describe("测试 format 方法", () => {
  describe('测试 formatMoney 方法', () => {
    it("测试格式化金额有值", () => {
      const money = 100000
      const zero = 0
      const result = '100,000'
      const zeroResult = '0'
      expect(_.formatMoney(money)).to.equal(result);
      expect(_.formatMoney(zero)).to.equal(zeroResult);
    });

    it("测试格式化金额 值为null | undefined", () => {
      const nullMoney = null
      const undefinedMoney = undefined
      const result = ''
      expect(_.formatMoney(nullMoney)).to.equal(result);
      expect(_.formatMoney(undefinedMoney)).to.equal(result);
    });
  })
});
