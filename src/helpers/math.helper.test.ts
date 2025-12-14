import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add positive numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract numbers", () => {
    const a = 5;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test("should subtract negative numbers", () => {
    const a = -5;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply numbers", () => {
    const a = 5;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(5 * 2);
  });

  test("should multiply by 0", () => {
    const a = 7;
    const b = 0;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});
