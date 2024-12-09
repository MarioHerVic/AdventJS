function createFrame(names) {
  let boxReturn = "";
  let maxNameLength = 0;

  for (let i = 0; i < names.length; i++) {
    if (names[i].length > maxNameLength)
      maxNameLength = names[i].length;
  }
  
  for (let i = 0; i < names.length; i++) {
    boxReturn += "* "
    boxReturn += names[i];

    for (let j = names[i].length; j < maxNameLength; j++) {
      boxReturn += " ";
    }

    boxReturn += " *\n"
  }
  

  let cierre = "";

  for (let j = 0; j < maxNameLength + 4; j++) {
    cierre += "*";
  }
  boxReturn += cierre;

  cierre += "\n";
  boxReturn = cierre + boxReturn;
  
  return boxReturn;
}


createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(['midu'])

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(['a', 'bb', 'ccc', 'dddd'])

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********