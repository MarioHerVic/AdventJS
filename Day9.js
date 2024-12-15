function moveTrain(board, mov) {
    let res = ['none', 'eat', 'crash'];
    let pos = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes("@")) {
            pos = [i, board[i].indexOf("@")];
            break;
        }
    }

    let charAtNewPos;

    switch (mov.toUpperCase()) {
        case 'U':
            if (pos[0] == 0)
                return res[2];
            charAtNewPos = board[pos[0] - 1][pos[1]];
            break;
        case 'D':
            if (pos[0] == board.length - 1)
                return res[2];
            charAtNewPos = board[pos[0] + 1][pos[1]];
            break;
        case 'L':
            if (pos[1] == 0)
                return res[2];
            charAtNewPos = board[pos[0]][pos[1] - 1];
            break;
        case 'R':
            if (pos[1] == board[pos[0].length])
                return res[2];
            charAtNewPos = board[pos[0]][pos[1] + 1];
            break;
    }

    if (charAtNewPos == '*')
        return res[1];
    if (charAtNewPos == 'o')
        return res[2];
    return res[0];
}







const cboard = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(cboard, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(cboard, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(cboard, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(cboard, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha