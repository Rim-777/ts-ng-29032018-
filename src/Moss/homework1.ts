function isInArray<T>(arr: T[], ...args: T[]): boolean {
    return args.every((element: T): boolean => {
        return arr.includes(element);
    });
}

function toNum<T>(item: strOrNum) {
    const result = typeof item === "number" ? item : parseFloat(item);
    return isNaN(result) ? 0 : result;
}

function summator(...args: strOrNum []): number {
    return args.map(toNum).reduce((sum, entry) => {
        return sum + entry;
    });
}

function getUnique<T>(...args: T[]): T[] {
    return args.filter((elem, index, arr): boolean => {
        return arr.indexOf(elem) === index;
    });
}

const SYMBOLS = new RegExp("[0-9$&+,:;=?@#|'<>.^*()%!-]");

function stringReverse(initialWord: string): string {
    const arr: string[] = initialWord.toString().split("");
    const targetArray: string[] = [];
    const obj: { [index: number]: string } = {};

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].match(SYMBOLS)) {
            targetArray.unshift(arr[i]);
        } else {
            obj[i] = arr[i];
        }
    }

    for (const [key, value] of Object.entries(obj)) {
        targetArray.splice(parseInt(key, 10), 0, value);
    }

    return targetArray.join("");
}

export {
    isInArray,
    toNum,
    summator,
    getUnique,
    stringReverse,
};
