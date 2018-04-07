export function isInArray<T>(arr: T[], ...args: T[]): boolean {
    for (const entry of args) {
        if (arr.includes(entry)) {
            continue;
        }

        return false;
    }
    return true;
}

export function convertToNum<T>(item: stringOrNumber) {
    let result = typeof item === "number" ? item : parseFloat(item);
    if (isNaN(result)) {
        result = 0;
    }
    return result;
}

export function summator(...args: stringOrNumber []): number {
    let sum = 0;

    for (const entry of args) {
        sum += convertToNum(entry);
    }
    return sum;
}

export function getUnique<T>(...args: T[]): T[] {
  return args.filter((elem, index, arr): boolean => {
    return arr.indexOf(elem) === index;
  });
}

// function stringReverse(initialWord: string): string {
//   const arr: string[] = initialWord.toString().split("");
//   const arrOfWords: string[] = [];
//   const obj: {} = {};
//   const regexp = new RegExp("[0-9$&+,:;=?@#|'<>.^*()%!-]");
//
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i].match(regexp)) {
//       arrOfWords.unshift(arr[i]);
//     } else {
//       obj[i] = arr[i];
//     }
//   }
//
//   for (const index in obj) {
//     arrOfWords.splice(index, 0, obj[index])
//   }
//
//   return arrOfWords.join("");
// }
