function isInArray(firstParam: any[], ...restOfParams: any[]): boolean {
  return restOfParams.every((value) => {
    return (firstParam.indexOf(value) >= 0);
  });
}
let isVue: boolean = isInArray(["Vue"], "Vue", "Vue", "Vue");

function summator(...args: (string|number)[]): number {
  const numbers = args.map((x) => {
    if (isString(x)) {
      const num = parseInt(x, 10);
      return isNaN(num) ? 0 : num;
    }
    return x;
  });
  return numbers.reduce((a, b) => a + b, 0);
}

function isString(myVar: number | string): myVar is string {
  return typeof myVar === "string";
}

summator(1, "15", "aa123");

function getUnique(...args: any[]): any[] {
  return [...new Set(args)];
}

function smartRevers(str: string): string {
  let result = "";
  str.split(" ").forEach((word) => {
    const chartsArray = word.split("");
    const chartsArrayLength = chartsArray.length;
    const tmp = new Array(chartsArrayLength);
    chartsArray.forEach((chart, index) => {
      if (/^[a-zA-Z]+$/.test(chart)) {
        tmp[(chartsArrayLength - 1) - index] = chart;
      } else {
        tmp[index] = chart;
      }
    });
    result += tmp.join("");
    result += " ";
  });
  return result.trim();
}
