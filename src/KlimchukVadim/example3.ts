function getUnique(...arr: string[]) {
    let result: string[] = [];

    nextInput:
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];

            for (let j = 0; j < result.length; j++) {
                if (result[j] === str) continue nextInput;
            }
            result.push(str);
        }

    return result;
}

alert(getUnique("Computer", "Table", "5", "Computer", "5", "Table"));
