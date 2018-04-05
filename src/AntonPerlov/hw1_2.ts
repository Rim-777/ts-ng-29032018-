// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
//
function summator(...arg: Array<string | number>): number {
  let retVal: number = 0;

  for (const i of arg) {
    if (typeof i === "number") {
      retVal += i as number;
    } else if (typeof i === "string" && !isNaN(parseInt(i as string))) {
      retVal += parseInt(i as string);
    }

  }
  return retVal;
}

console.log(summator(1, "3", 5, 7, 9)); //25
console.log(summator(1, 2, 3)); //6
console.log(summator(1, 2, 3, "a")); //6
