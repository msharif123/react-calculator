import { describe, test, expect } from 'vitest';
import { add, subtract, multiply, divide } from "../component/Calculator";

describe('Calculator', () => {
  //addera
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(0,2)).toBe (2)
  });

  // subtrahera
  test('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, -5)).toBe(15);
    expect(subtract(0, 0)).toBe(0);

  });

  // Multiplicera
  test('should multiply two numbers correctly', () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-2, 5)).toBe(-10);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(1,0)).toBe (0)
  });

  // Devidera
  test('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-9, 3)).toBe(-3);
    expect(divide(5, 2)).toBe(2.5);
  });

  test('throw error when devision by Zero', () => {
    expect(() => divide(5, 0)).toThrowError("Division by zero is not allowed");
  });
});