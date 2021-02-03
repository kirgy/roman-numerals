import { convertNumerals } from "../../src/numerals"

test('converts decimal 1 to roman numeral I', () => {
    const result: string = convertNumerals(1);
    const expected: string = 'I'
    
    expect(result).toBe(expected);
});