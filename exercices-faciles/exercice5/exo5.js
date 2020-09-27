// proposer une saisie clavier qui demande a l'utilisateur
// la table de multiplication qu'il souhaite
const readline = require("readline-sync");

let saisie = readline.questionInt("Quelle table de multiplication voulez-vous afficher ? ");

function multiplication(nb){
    for(let i = 0; i <= 10; i++){
        console.log(`${nb} x ${i} = ${nb * i}`);
    }
}

multiplication(saisie);