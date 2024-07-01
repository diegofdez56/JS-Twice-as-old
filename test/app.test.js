import { test, expect } from 'vitest';
import { edad } from '../src/js/app.js';

test('Edad del padre: 36 y edad del hijo: 7', () => {
  expect(edad(36, 7)).toBe(22);
});

test('Edad del padre: 55 y edad del hijo: 30', () => {
  expect(edad(55, 30)).toBe(5);
});

test('Edad del padre: 42 y edad del hijo: 21', () => {
  expect(edad(42, 21)).toBe(0);
});

test('Edad del padre: 22 y edad del hijo: 1', () => {
  expect(edad(22, 1)).toBe(20);
});

test('Edad del padre: 29 y edad del hijo: 0', () => {
  expect(edad(29, 0)).toBe(29);
});
