
function calculatePrice(ornaments) {
    let ornamentsValues = {'*': 1, 'o': 5, '^': 10, '#': 50, '@': 100};
    let totalValue = 0;

    for (let i = 0; i < ornaments.length; i++) {
        let actualValue = ornamentsValues[ornaments[i]];  

        if (isNaN(actualValue))
            return undefined;
        
        if (i < ornaments.length - 1 && actualValue < ornamentsValues[ornaments[i + 1]] )
            totalValue -= actualValue;
        else
            totalValue += actualValue;
    }

    return totalValue;
}



console.log(calculatePrice('***'));  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'));   // 4   (5 - 1)
console.log(calculatePrice('o*'));   // 6   (5 + 1)
console.log(calculatePrice('*o*'));  // 5  (-1 + 5 + 1) 
console.log(calculatePrice('**o*')); // 6  (1 - 1 + 5 + 1) 
console.log(calculatePrice('o***')); // 8   (5 + 3)
console.log(calculatePrice('*o@'));  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'));   // 49  (-1 + 50)
console.log(calculatePrice('@@@'));  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'));   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'));  // undefined (Z es desconocido)