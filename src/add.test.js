import { add } from './addStringCalculate';

test('adds numbers separated by comma', () => {
    expect(add('1,2,3')).toBe(6);
});

test('adds numbers separated by newline', () => {
    expect(add('1\n2\n3')).toBe(6);
});

test('handles custom delimiter', () => {
    expect(add('//;\n1;2;3')).toBe(6);
});

test('handles custom delimiter', () => {
    expect(add('//|\n1|2|3')).toBe(6);
});

test('throws error on negative numbers', () => {
    expect(() => add('//;\n1;-2;3')).toThrow('Negative numbers not allowed: -2');
});
