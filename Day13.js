
function isRobotBack(moves) {
    let pos = [0, 0];
    let invertirNext = false;
    let doubleNext = false;
    let execIfNotExec = false;
    let exec = [];

    for (let i = 0; i < moves.length; i++) {
        let currentChar = moves[i];

        if (currentChar == '*'){
            doubleNext = true;
            continue;
        }
        if (currentChar == '!'){
            invertirNext = true;
            continue;
        }
        if (currentChar == '?'){
            execIfNotExec = true;
            continue;
        }

        if ((currentChar == 'R' && !invertirNext) || (currentChar == 'L' && invertirNext)) {
            if (execIfNotExec && exec.includes('R')) {
                execIfNotExec = false;
                break;
            }
            pos[0]++;
            exec += 'R';
        }
        else if (currentChar == 'L' || (currentChar == 'R' && invertirNext)) {
            console.log("A")
            if (execIfNotExec && exec.includes('L')) {
                execIfNotExec = false;
                break;
            }
            pos[0]--;
            exec += 'L';
        }
        else if ((currentChar == 'U' && !invertirNext) || (currentChar == 'D' && invertirNext)) {
            if (execIfNotExec && exec.includes('U')) {
                execIfNotExec = false;
                break;
            }
            pos[1]++;
            exec += 'U';
        }
        else if (currentChar == 'D' || (currentChar == 'U' && invertirNext)) {
            if (execIfNotExec && exec.includes('D')) {
                execIfNotExec = false;
                break;
            }
            pos[1]--;
            exec += 'D';
        }

        if (doubleNext == true) {
            i--;
            doubleNext = false;
        }

        invertirNext = false;
    }
    if (pos[0] == 0 && pos[1] == 0)
        return true
    else 
        return pos;
}


// console.log(isRobotBack('R'));     // [1, 0]
// console.log(isRobotBack('RL'));    // true
// console.log(isRobotBack('RLUD'));  // true
// console.log(isRobotBack('*RU'));   // [2, 1]
// console.log(isRobotBack('R*U'));   // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
// console.log(isRobotBack('R?R'));   // [1, 0]
// console.log(isRobotBack('U?D'));   // true
// console.log(isRobotBack('R!L'));   // [2,0]
// console.log(isRobotBack('U!D'));   // [0,2]
// console.log(isRobotBack('R?L'));   // true
// console.log(isRobotBack('U?U'));   // [0,1]
// console.log(isRobotBack('*U?U'));  // [0,2]
// console.log(isRobotBack('U?D?U')); // true

// // Ejemplos paso a paso:
// console.log(isRobotBack('R!U?U')); // [1,0]
// // 'R'  -> se mueve a la derecha 
// // '!U' -> se invierte y se convierte en 'D'
// // '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

// console.log(isRobotBack('UU!U?D')); // [0,1]
// // 'U'  -> se mueve arriba
// // 'U'  -> se mueve arriba
// // '!U' -> se invierte y se convierte en 'D'
// // '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'