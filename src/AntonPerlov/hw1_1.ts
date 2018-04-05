// Обязательно используйте tslint , no any

// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.

export function isInArray(myArray: snb[], ...arg: snb[]): boolean {
  let retVal: boolean = true;

  for (const i of arg) {

    // if(!findVal(i, myArray)){
    //     retVal = false;
    // }

    if (myArray.includes(i)) {
      continue;
    }
    retVal = false;

  }
  return retVal;
}

// function findVal(val: string|number, inArray: (string|number)[]): boolean {
//     let retVal: boolean = false;
//     for (let u of inArray) {
//         if (u === val) {
//             retVal = true;
//         }
//     }
//     return retVal;
// }

// console.log(isInArray([1, "3", 5, 7, 9], 9, 1, 5)); //true
// console.log(isInArray([1, "3", 5, 7, 9], 7, "3", 3, 1)); //false
// console.log(isInArray([1, "3", 5, 7, 9], 5, "3", 1, 9, 5)); //true
// console.log(isInArray([1, "3", 5, 7, 9], "3", 6, 1, 5, 9)); //false
