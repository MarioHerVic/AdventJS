function organizeInventory(inventory) {
  let organizedInvetory = {};


  for (let i = 0; i < inventory.length; i++) {
    let categoria = inventory[i].category;
    let nombre = inventory[i].name;
    let cantidad = inventory[i].quantity;

    if (!(categoria in organizedInvetory)) {
      organizedInvetory[categoria] = {};
    }
    
    if (!(nombre in organizedInvetory[categoria])) {
      organizedInvetory[categoria][nombre] = cantidad;
    }
    else {
      organizedInvetory[categoria][nombre] += cantidad;
    }

  }
  return organizedInvetory;
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory));

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventory2));

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
