/// task 1.

function IsInArray(arr: number[], ...rest: number[]): boolean {
  let result = true;

  rest.forEach(el => {
    if (arr.indexOf(el) === -1) {
      result = false;
    }
  });

  return result;
}

/// task 2.

function summator(...rest: (number | string)[]): number {
  let sum = 0;

  for (let i = 0; i < rest.length; i++) {
    if (typeof rest[i] === 'string') {
      sum += parseInt(rest[i] as string);
    }
    else {
      sum += rest[i] as number;
    }
  }

  return sum;
}

/// task 3.

function getUnique(arr: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}


/// task 4.

function strReverse(arg: string): string {
  let alpha: string[] = [];
  let result: string[] = [];

  // get alphabet chars
  for (let i = 0; i < arg.length; i++) {
    if (isAlpha(arg[i])) {
      alpha.push(arg[i]);
    }
  }

  for (let i = 0; i < arg.length; i++) {
    if (isAlpha(arg[i])) {
      result.push(alpha.pop() as string);
      continue;
    }
    result.push(arg[i]);
  }

  return result.join('');
}

function isAlpha(arg: string): boolean {
  return /[a-zA-Z]/.test(arg);
}

///