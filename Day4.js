function createXmasTree(height, ornament) {
    if (height > 100 || height < 1) {
        return "";
    }
    let tree = "";

    for (let i = 0; i < height; i++){
        for (let j = 0; j < height * 2 - 1; j++) {
            if (j < height - 1 - i || j > height - 1 + i) {
                tree += "_";
            }
            else { 
                tree += ornament;
            }
        }
        tree += "\n";
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < height * 2 - 1; j++) {
            if (j == height - 1) {
                tree += "#";
            }
            else {
                tree += "_";
            }
        }
        if (i == 0) {
            tree += "\n";
        }
    }

    return tree;
}





const tree1 = createXmasTree(5, '*')
console.log(tree1)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/