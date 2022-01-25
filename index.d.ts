import * as Chai from 'chai'

declare global {
  interface Window {
    expect: Chai.ExpectStatic
  }
  var expect: Chai.ExpectStatic
}

declare namespace ehrUtils {
  export function arrayFlat(arr: any[]): any[];

  export function formatMoney(value: string | undefined | null | number, separator: string): string;
}

export = ehrUtils;
