function isInArray<T>(arr: T[], ...args: T[]): boolean {
  for (const entry of args) {
    if (arr.includes(entry)) {
      continue;
    }
    return false;
  }
  return true;
}

function convertToNum<T>(item: number | string) {
  const result = typeof item === "number" ? item : parseFloat(item);
  if (isNaN(result)) {
    throw new TypeError('Wrong type of the term');
  }
  return result;
}

function summator(...args: Array<number | string>): number {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    let currentItem = args[i];
    sum += convertToNum(currentItem);
  }
  return sum;
}

function getUnique<T>(...args: T[]): T[] {
  return args.filter((elem, index, arr) => {
    return arr.indexOf(elem) === index;
  });
}

function stringReverse(initialWord: string): string {
  let arr: string[] = initialWord.toString()
    .split('');
  let arrOfWords: string[] = [];
  let obj: {} = {};
  const regexp = new RegExp("[0-9$&+,:;=?@#|'<>.^*()%!-]");

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].match(regexp)) {
      arrOfWords.unshift(arr[i]);
    } else {
      obj[i] = arr[i];
    }
  }

  for (var index in obj) {
    arrOfWords.splice(index, 0, obj[index])
  }

  return arrOfWords.join('');
}
