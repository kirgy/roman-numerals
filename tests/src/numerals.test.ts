import { convertNumerals } from "../../src/numerals"

/**
 * Assertions for these tests has been derived from here:
 * http://www.novaroma.org/via_romana/numbers.html
 */

test('converts decimal 1 to roman numeral I', () => {
    expect(convertNumerals(1)).toBe('I');
});

test('converts decimal 2 to roman numeral II', () => {
    expect(convertNumerals(2)).toBe('II');
});

test('converts decimal 4 to roman numeral IV', () => {
    expect(convertNumerals(4)).toBe('IV');
});

test('converts decimal 5 to roman numeral V', () => {
    expect(convertNumerals(5)).toBe('V');
});

test('converts decimal 6 to roman numeral VI', () => {
    expect(convertNumerals(6)).toBe('VI');
});

test('converts decimal 9 to roman numeral IX', () => {
    expect(convertNumerals(9)).toBe('IX');
});

test('converts decimal 10 to roman numeral X', () => {
    expect(convertNumerals(10)).toBe('X');
});

test('converts decimal 11 to roman numeral XI', () => {
    expect(convertNumerals(11)).toBe('XI');
});