function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        let currentBoxLine = box[i];

        if (currentBoxLine[0] != '#' || currentBoxLine[currentBoxLine.length - 1] != '#')
            return false;

        if (currentBoxLine.includes('*'))
            return true;
    }

    return false;
}


console.log(inBox([
    "###",
    "#*#",
    "###"
])) // ➞ true

console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
])) // ➞ true

console.log(inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
])) // ➞ false

console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])) // ➞ false