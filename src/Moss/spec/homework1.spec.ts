///<reference path="../../../node_modules/@types/jest/index.d.ts"/>
import {summator, convertToNum, isInArray, getUnique} from "../homework1";

describe(isInArray, () => {
    test('with all included elements', () => {
        expect(isInArray([1, 2, 3, 4, 5], 1, 5, 2)).toBeTruthy()
    });

    test('with an unincluded element', () => {
        expect(isInArray([1, 2, "3", 4, 5], 1, 5, "7")).toBeFalsy()
    })
});

describe(convertToNum, () => {
    test('with a number as a string', () => {
        expect(convertToNum("2")).toEqual(2);
        expect(typeof convertToNum("2")).toBe("number")
    });

    test('with some regular string', () => {
        expect(convertToNum("qwerty2")).toEqual(0)
    })
});

describe(summator, () => {
    test('with correct params', () => {
        expect(summator("2", 1, 5)).toEqual(8);
    });

    test('with some regular string in params', () => {
        expect(summator("qwe", 1, 5)).toEqual(6)
    })
});

describe(getUnique, () => {
    it('returns an unique array', () => {
        expect(getUnique(1, 23, 5, 4, 45, 5, 4)).toEqual([1, 23, 5, 4, 45]);
    });
});