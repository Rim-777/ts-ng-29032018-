function isInArray(first: number[], ...second: number[]): boolean {
  let result: boolean = true;
  for (const elSecond of second) {
    if ( !first.some(x => x === elSecond) ) {
      result = false;
    }
  }
  return result;
}

function summator(...arr: Array<number | string>): number {
  let total: number = 0;
  for (const element of arr) {
    if (!isNaN(Number(element))) {
      total += +element;
    }
  }
  return total;
}

function getUnique(...arr: number[]): number[] {
  let newArray: number[] = [];
  for (const element of arr) {
    if ( newArray.every(x => x !== element) ) {
      newArray.push(element);
    }
  }
  return newArray;
}

function reverse(initial: string): string {
  let newString: string = "";
  const arrayFromInitString: string[] = initial.split(" ");
  for (const element of arrayFromInitString) {
    newString += element.split("").reverse().join("");
    newString += " ";
  }
  newString = newString.substring(0, newString.length - 1);
  return newString;
}
