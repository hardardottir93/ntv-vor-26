import { add } from "./math";

describe("add", () => {
  it("should return 5 when adding 2 and 3", () => {
    expect(add(2, 3)).toBe(5);
  });
});
