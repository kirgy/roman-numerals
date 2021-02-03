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