export const convertNumerals = (givenInt: number) : string => {

    let romanNumeral: string = '';

    for (let i=0; i<givenInt; i++) {
        romanNumeral += 'I';
    }

    return romanNumeral;
}