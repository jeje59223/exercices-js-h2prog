// A partir d'un nombre saisi, afficher la factorielle
const readline = require("readline-sync");

let saisie = readline.questionInt("Factorielle de : ");
let resultat = 1;

for(let i = 1; i <= saisie; i++){
    console.log(`Etape ${i} : ${resultat = resultat * i}`);
}
console.log(`Le résultat de factorielle de ${saisie} est ${resultat}`);