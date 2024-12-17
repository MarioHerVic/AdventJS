function compile(instructions) {
    let registersList = {};
    let deep = 0;

    for (let i = 0; i < instructions.length && deep < 20; i++) {
        let currentLine = instructions[i];
        let argumentos = currentLine.split(" ");

        if (currentLine.includes("MOV")) {
            if (isNaN(argumentos[1])) {
                registersList[argumentos[2]] = registersList[argumentos[1]];
            }
            else {
                registersList[argumentos[2]] = argumentos[1];
            }
        }
        else if (currentLine.includes("JMP")) {
            if (registersList[argumentos[1]] == 0) {
                i = argumentos[2] - 1;
            }
            else {
                continue;
            }
        }
        else if (currentLine.includes("INC")) {
            if (registersList[argumentos[1]] == null) {
                registersList[argumentos[1]] = 0;
            }
            registersList[argumentos[1]]++;
        }
        else if (currentLine.includes("DEC")) {
            if (registersList[argumentos[1]] == null) {
                registersList[argumentos[1]] = 0;
            }
            registersList[argumentos[1]]--;
        }
        console.log(registersList);
        deep++;
    }

    return registersList.A;
}




const gInstructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

compile(gInstructions) // -> 2


/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */