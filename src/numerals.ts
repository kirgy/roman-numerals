interface intRomDef {
    int: number,
    rom: string,
}

export const convertNumerals = (givenInt: number) : string => {
    let romanNumeral: string = '';
    let remainValue: number = givenInt;

    const intToRom: Array<intRomDef> = [
        {int:10, rom:'X'}, {int:9, rom:'IX'}, {int:5, rom:'V'}, {int:4, rom:'IV'}, {int:1, rom:'I'}, 
    ];
    
    intToRom.forEach(intRom => {
        while (remainValue > intRom.int-1) {
            romanNumeral += intRom.rom;
            remainValue -= intRom.int;
        }        
    });

    return romanNumeral;
}