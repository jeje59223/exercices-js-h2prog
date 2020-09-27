// demander a un utilisateur d'entrer un chiffre et tant que
// cette saisie n'est pas un chiffre lui redemander.
const readline = require("readline-sync");

let saisie = readline.question("Quel nombre voulez vous saisir ? ");
let saisieCorrect = false;

while (!saisieCorrect) {
  if (isNaN(saisie)) {
    console.log("Saisie incorrect , veuillez saisir un nombre !");
    saisie = readline.question("Quel chiffre voulez vous saisir ? ");
  } else {
    console.log(`Le chiffre saisie est : ${saisie}`);
    saisieCorrect = true;
  }
}
