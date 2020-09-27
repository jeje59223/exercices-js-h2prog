// saisie clavier qui demande le nom, prenom et l'age et qui realise l'affichage
const readline = require("readline-sync");

let name = readline.question("Quel est votre nom ? ");
let firstName = readline.question("Quel est votre prénom ? ");
let age = readline.questionInt("Quel est votre age ? ");

let txt = "--------------------------------------------------\n";
txt += "-------------------- BIENVENUE -------------------\n";
txt +="--------------------------------------------------\n";
txt +=`Votre nom est : ${name}\n`;
txt +=`Votre prénom est : ${firstName}\n`;
txt +=`Votre age est : ${age} ans\n`;

console.log(txt);