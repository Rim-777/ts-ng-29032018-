// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

function getUnique(...arg: snb[]): snb[] {

  const retVal: snb[] = [];

  for (const i of arg) {
    if (retVal.includes(i)) {
      continue;
    }
    retVal.push(i);
  }

  return retVal;

}

console.log(getUnique("1", 2, "a", 4, 4, "b", "a", 78)); // [ '1', 2, 'a', 4, 'b', 78 ]
