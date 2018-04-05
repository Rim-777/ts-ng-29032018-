function isInArray(a: number[], ...b: number[]): boolean {
    for (const item of b) {
        if (a.indexOf(item) === -1) {
            return false;
        }
    }

    return true;
}

alert(isInArray([1, 2, 3], 1, 2, 3, 1));
alert(isInArray([1, 2, 3], 1, 2, 2, 4, 1));
alert(isInArray([1, 2, 3, 4, 5], 1, 2, 3, 1, 3 , 1, 2, 5, 4));
