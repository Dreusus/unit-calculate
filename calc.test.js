import {
  processKey,
  getCurrentFirstNumber,
  getCurrentSecondNumber,
  getCurrentOperation
} from './calc.js';

describe("Calculator Tests", () => {

  beforeEach(() => {
      // Очистка перед каждым тестом
      processKey('ac');
  });

  test("should add two numbers", () => {
      processKey('1');
      processKey('+');
      processKey('2');
      processKey('=');

      expect(getCurrentFirstNumber()).toBe("3");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

  test("should subtract two numbers", () => {
      processKey('5');
      processKey('-');
      processKey('2');
      processKey('=');

      expect(getCurrentFirstNumber()).toBe("3");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

  test("should multiply two numbers", () => {
      processKey('5');
      processKey('X');
      processKey('2');
      processKey('=');

      expect(getCurrentFirstNumber()).toBe("10");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

  test("should divide two numbers", () => {
      processKey('6');
      processKey('/');
      processKey('2');
      processKey('=');

      expect(getCurrentFirstNumber()).toBe("3");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

  test("should not allow division by zero", () => {
      processKey('5');
      processKey('/');
      processKey('0');
      processKey('=');

      expect(getCurrentFirstNumber()).toBe("Ошибка");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

  test("should concatenate digits for multi-digit numbers", () => {
      processKey('1');
      processKey('2');
      processKey('3');

      expect(getCurrentFirstNumber()).toBe("123");
      expect(getCurrentSecondNumber()).toBe("");
      expect(getCurrentOperation()).toBe("");
  });

});
