function drawRace(indices, length) {
    let pistaDeCarrera = "";
    let cantCarriles = indices.length;

    for (let i = 0; i < cantCarriles; i++) {
        let posicionReno = indices[i];
        pistaDeCarrera += ' '.repeat(cantCarriles - i - 1);

        if (posicionReno == 0) {
            pistaDeCarrera += '~'.repeat(length);
        }
        else {
            for (let j = 0; j < length; j++) {

                if (posicionReno < 0)
                    posicionReno = length + posicionReno;

                if (j == posicionReno)
                    pistaDeCarrera += 'r';
                else
                    pistaDeCarrera += '~';
                
            }
        }
        let pos = i + 1;
        pistaDeCarrera += " /" + pos;

        if (i != cantCarriles - 1)
            pistaDeCarrera += "\n";
    }

    return pistaDeCarrera;
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/