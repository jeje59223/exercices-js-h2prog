// Demander une saisie a l'utilisateur et lui donner la puissance de 2

let readline = require('readline-sync');

const puissance = 2; 
let saisie = readline.questionInt("Puissance voulue ? : ");

console.log(`${puissance} à la puissance ${saisie} = ${Math.pow(puissance, saisie)}.`);