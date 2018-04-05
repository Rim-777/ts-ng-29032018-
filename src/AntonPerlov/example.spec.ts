import { isInArray } from "./hw1_1";

describe("isInArray", () => {
  it("test 1", () => {
    expect(isInArray([1, 2, 3], 1, 2, 3, 2, 3, 2))
      .toEqual(true);
  });
});
