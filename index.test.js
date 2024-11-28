function sumOfStringChars(stringInput) {
  if (stringInput === "") return 0;

  const delimiters = /[,\n;]/;
  const spiltStringData = stringInput.split(delimiters);

  if (spiltStringData.some((item) => parseInt(item) < 0)) {
    console.error("negative numbers not allowed");
    return;
  }

  const sum = spiltStringData.reduce(
    (total, item) => total + parseInt(item),
    0
  );

  return sum;
}

const mockFn = jest.fn();

describe("add string", () => {
  it("should have empty string as argument return 0", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("")).toBe(0);
  });

  it("should have string as single argument value return value", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("1")).toBe(1);
  });

  it("should have input string as multiple argument value return sum", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("1,5")).toBe(6);
  });

  it("should have input string with negative value throw error", () => {
    expect(mockFn).toHaveBeenCalled();
    console.error = jest.fn();
    expect(sumOfStringChars("1,-5")).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith("negative numbers not allowed");
  });

  it("should have input string as multiple argument with delimter ; value return sum", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("1;5")).toBe(6);
  });

  it(`should have input string as multiple argument and negative value with delimter ; throw error`, () => {
    expect(mockFn).toHaveBeenCalled();
    console.error = jest.fn();
    expect(sumOfStringChars("1;-5")).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith("negative numbers not allowed");
  });

  it("should have input string as multiple argument with delimter \n value return sum", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("1\n5")).toBe(6);
  });

  it(`should have input string as multiple argument and negative value with delimter \n throw error`, () => {
    expect(mockFn).toHaveBeenCalled();
    console.error = jest.fn();
    expect(sumOfStringChars("1\n-5")).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith("negative numbers not allowed");
  });

  test("should handle mixed delimiters and return sum", () => {
    expect(mockFn).toHaveBeenCalled();
    expect(sumOfStringChars("10,11;12\n13")).toBe(46);
  });
});
