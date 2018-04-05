function isString(a: number | string): a is string {
  return typeof a === "string";
}

function summator(...arg: Array<number | string>) {
  for (let i = 0; i < arg.length; i++) {
    let a = arg[i];
    if (isString(a)) {
      arg[i] = +arg[i];
      if (isNaN(arg[i])) { // Error
        throw new Error(`Не корректные данные '${arg[i]}'.`);
      }
    }
  }

  return arg.reduce((sum, current) => {
    return sum + current; // Error
  });
}

try {
  alert(summator(1, 2, 3, 4));
} catch (e) {
  alert(e.message);
}
