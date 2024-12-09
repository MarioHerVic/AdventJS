
function organizeShoes(shoes) {
    let pairedShoes = [];
    let unPairedShoesLength = shoes.length;
    
    for (let i = 0; i < unPairedShoesLength; i++) {
        let currentShoe = shoes[i];

        for (let j = i + 1; j < unPairedShoesLength; j++) {
            if (shoes[j].size == currentShoe.size && shoes[j].type != currentShoe.type) {
                pairedShoes.push(shoes[i].size);
                
                shoes.splice(i, 1);
                shoes.splice(j - 1, 1);

                unPairedShoesLength = shoes.length;
                i--;
                break;
            }
        }

    }

    return pairedShoes;
}




// const shoes1 = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 },
//     { type: 'R', size: 42 },
//     { type: 'I', size: 41 },
//     { type: 'I', size: 42 }
// ]

// console.log(organizeShoes(shoes1));
// // [38, 42]

// const shoes2 = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 }
// ]

// console.log(organizeShoes(shoes2));
// // [38, 38]

// const shoes3 = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 36 },
//     { type: 'R', size: 42 },
//     { type: 'I', size: 41 },
//     { type: 'I', size: 43 }
// ]

// console.log(organizeShoes(shoes3));
// // []
