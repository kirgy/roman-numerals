export const convertNumerals = (givenInt: number) : string => {
    let romanNumeral: string = '';
    let remainValue: number = givenInt;

    if (remainValue == 4) {
        romanNumeral += 'IV'
        remainValue -= 4;
    }

    if (remainValue >= 5) {
        romanNumeral += 'V'
        remainValue -= 5;
    }


    while (remainValue > 0) {
        romanNumeral += 'I';
        remainValue -= 1;
    }

    return romanNumeral;
}