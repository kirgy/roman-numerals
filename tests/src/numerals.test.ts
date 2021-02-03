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

test('converts decimal 14 to roman numeral XIV', () => {
    expect(convertNumerals(14)).toBe('XIV');
});

test('converts decimal 15 to roman numeral XV', () => {
    expect(convertNumerals(15)).toBe('XV');
});

test('converts decimal 16 to roman numeral XVI', () => {
    expect(convertNumerals(16)).toBe('XVI');
});

test('converts decimal 17 to roman numeral XVII', () => {
    expect(convertNumerals(17)).toBe('XVII');
});

test('converts decimal 19 to roman numeral XIX', () => {
    expect(convertNumerals(19)).toBe('XIX');
});

test('converts decimal 20 to roman numeral XX', () => {
    expect(convertNumerals(20)).toBe('XX');
});

test('converts decimal 21 to roman numeral XXI', () => {
    expect(convertNumerals(21)).toBe('XXI');
});