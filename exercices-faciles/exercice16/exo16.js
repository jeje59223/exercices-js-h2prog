// faire un programme qui choisit un nb aleatoire entre 0 et 20
// si nb < 7 = petit, si nb entre 7 et 15 = moyen, nb > 15 = grand

let nbAleatoire = Math.floor(Math.random() * Math.floor(20));

console.log(nbAleatoire);

if(nbAleatoire < 7){
    console.log("Petit");
} else if(nbAleatoire >= 7 && nbAleatoire <= 15){
    console.log("Moyen");
} else {
    console.log("Grand");
}