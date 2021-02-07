import { convertNumerals } from "../../src/numerals"

/**
 * Assertions for these tests has been derived from here:
 * http://www.novaroma.org/via_romana/numbers.html
 */

const testCases = [[1,'I'], [2,'II'], [4,'IV'], [5,'V'], [6,'VI'], [9,'IX'], [10,'X'], 
[11,'XI'], [14,'XIV'], [15,'XV'], [16,'XVI'], [17,'XVII'], [19,'XIX'], [20,'XX'], 
[21,'XXI'], [49,'XLIX'], [50,'L'], [51,'LI'], [55,'LV'], [60,'LX'], [90,'XC'],
[100,'C'], [101,'CI'], [104,'CIV'], [105,'CV'], [110,'CX'], [140,'CXL'], [150,'CL'],
[400,'CD'], [490,'CDXC'], [500,'D'], [501,'DI'], [505,'DV'], [510,'DX'], [600,'DC']]

test.each(testCases)(
    'converts decimal %i to roman numeral %s',
    (testInt, romanNumeral) => {
        /**
         * the callback is giving us string|number, but our typescript convertNumerals only expects
         * a number, so we're going to throw an Error in case someone has set up a test wrong. Otherwise
         * we get a compile error. There is probably a better way of doing this, but time constraints 
         * are limiting me here.
         */

        if (typeof(testInt) === 'string') {
            throw new Error('Cannot run test on type of string to Roman numeral');
        }
        expect(convertNumerals(testInt)).toBe(romanNumeral);
    },
  );