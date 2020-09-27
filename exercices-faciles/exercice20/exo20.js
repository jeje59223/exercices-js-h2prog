// additionner des valeurs d'un tableau seulement si les valeurs sont paires
const tableau = [2,6,10,3,8,7,20];
let resultat = 0;

for(let i = 0; i < tableau.length; i++){
    if(tableau[i] % 2 === 0){
        resultat = resultat + tableau[i];
        console.log(`Itération : ${i} : ${resultat}`);
    } else {
        console.log(`Iteration : ${i} : non paire`);
    }
}
console.log(`Le total des chiffre pairs du tableau est ${resultat}`);
