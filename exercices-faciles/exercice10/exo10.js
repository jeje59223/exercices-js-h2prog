// permettre la saisie des informations d'un objet
const readline = require("readline-sync");

let personnage = {};

personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = readline.questionInt("Quel age ? ");

console.log(personnage);