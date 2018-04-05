type sn = (string | number);

// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(first: sn[], ...rest: sn[]): boolean {
    return rest.every((value) => {
      return (first.indexOf(value) >= 0);
    });
  }

//   2)
//   писать функцию summator(), которая сумирует переданые ей аргументы.
//   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function isNumber(a: sn): a is number {
    return typeof a === "number";
}

function summator(...rest: sn[]): number {
    return rest.reduce<number>(
        (acc: number, next: sn) => {
            return isNumber(next) ?
                (acc + next) :
                isNaN(Number(next)) ?
                    acc :
                    acc + Number(next);
        }, 0);
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique(...rest: sn[]): sn[] {
    let uniqueArr: sn[] = [];
    for (let el of rest) {
        if (uniqueArr.indexOf(el) === -1) {
          uniqueArr.push(el);
        }
    }

    return uniqueArr;
}

// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5

function isLetter(str: string): boolean {
    if (str.length !== 1) {
        throw new Error("Parameter must be a letter");
    }

    return /[a-zA-Z]/.test(str);
}

function revertWord(str: string): string {
    let result = [];
    let temp = [];
    let letters = str.split("");

    for (let i = 0, len = letters.length; i < len; i++) {
        if (isLetter(letters[i])) {
            temp.push(letters[i]);
        } else {
            result[i] = letters[i];
        }
    }

    for (let i = 0, len = letters.length; i < len; i++) {
        if (result[i] === undefined) {
            result[i] = temp.pop();
        }
    }

    return result.join("");
}

function revertSentence(str: string): string {
    return str.split(" ").map(revertWord).join(" ");
}
