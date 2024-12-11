function fixPackages(packages) {
    while (packages.includes("(")) {
        let substrParentesisOriginal = "";
        let substrParentesisInvertida = "";

        let lvlAnidamiento = 0;
        let anidado = false;

        for (let i = 0; i < packages.length; i++) {
            if (packages[i] == "(") {
                lvlAnidamiento += 1;
                anidado = true;
            }
            else if (packages[i] == ")") {
                lvlAnidamiento -= 1;
            }

            if (lvlAnidamiento == 0 && anidado) {
                substrParentesisOriginal = packages.substring(packages.indexOf("("), i + 1)
                break;
            }
        }

        substrParentesisInvertida = substrParentesisOriginal;

        while (substrParentesisInvertida.includes("(")) {
            let firstParent = substrParentesisInvertida.lastIndexOf("(");
            let lastParent = substrParentesisInvertida.indexOf(")");

            let parteAInvertir = substrParentesisInvertida.slice(firstParent, lastParent + 1);
            let parteInvertida = parteAInvertir.substring(1, parteAInvertir.length - 1).split("").reverse().join("");

            substrParentesisInvertida = substrParentesisInvertida.replace(parteAInvertir, parteInvertida);
        }

        packages = packages.replace(substrParentesisOriginal, substrParentesisInvertida);
    }

    return packages;
}

// function fixPackages(packages) {

//     while(packages.includes('(')) {
//         let firstParent = packages.lastIndexOf('(');
//         let lastParent = packages.indexOf(')', firstParent);

//         let parteAInvertir = packages.slice(firstParent + 1, lastParent); // Cogemos lo que se encuenta entre los parentesis más exteriores

//         let parteInvertida = parteAInvertir.split('').reverse().join(''); // Invertimos todo

//         packages = packages.replace(`(${parteAInvertir})`, parteInvertida);
//     }

//     return packages;
// }

console.log(fixPackages('a(cb)de'));
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'));
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'));
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'));
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"