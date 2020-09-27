// forcer la saisie d'un chiffre
// faire un programme qui force la saisie du chiffre 3, tant
// que ce chiffre n'est pas saisie, le programme recommence

const readline = require("readline-sync");

let saisie = readline.questionInt("Saisir le chiffre 3 : ");

while(saisie !== 3){
    console.log("Vous n'avez pas saisie le bon chiffre...");
    saisie = readline.questionInt("Saisir le chiffre 3 : ");
}

console.log("Bravo ! Vous avez saisi un 3");