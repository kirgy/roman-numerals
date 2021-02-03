import { convertNumerals } from "../../src/numerals"

/**
 * Assertions for these tests has been derived from here:
 * http://www.novaroma.org/via_romana/numbers.html
 */

test('converts decimal 1 to roman numeral I', () => {
    const result: string = convertNumerals(1);
    const expected: string = 'I'
    
    expect(result).toBe(expected);
});

test('converts decimal 2 to roman numeral II', () => {
    const result: string = convertNumerals(2);
    const expected: string = 'II'
    
    expect(result).toBe(expected);
});

test('converts decimal 2 to roman numeral IV', () => {
    const result: string = convertNumerals(4);
    const expected: string = 'IV'
    
    expect(result).toBe(expected);
});

test('converts decimal 2 to roman numeral V', () => {
    const result: string = convertNumerals(5);
    const expected: string = 'IV'
    
    expect(result).toBe(expected);
});