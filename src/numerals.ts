interface intRomDef {
    int: number,
    rom: string,
}

export const convertNumerals = (givenInt: number) : string => {
    let romanNumeral: string = '';
    let remainValue: number = givenInt;

    /**
     * The ordering of this array is important - it needs to go from large to small
     * for the reductive maths to work
     */
    const intToRom: Array<intRomDef> = [
        {int:500, rom:'D'}, {int:400, rom:'CD'}, {int:390, rom:'XD'}, {int:100, rom:'C'}, {int:90, rom:'XC'}, {int:50, rom:'L'}, 
        {int:40, rom:'XL'}, {int:10, rom:'X'}, {int:9, rom:'IX'}, {int:5, rom:'V'}, {int:4, rom:'IV'}, {int:1, rom:'I'}, 
    ];
    
    intToRom.forEach(intRom => {
        while (remainValue > intRom.int-1) {
            romanNumeral += intRom.rom;
            remainValue -= intRom.int;
        }        
    });

    return romanNumeral;
}